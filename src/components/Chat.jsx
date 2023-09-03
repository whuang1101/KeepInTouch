import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Chat = ({socket}) => {
    const { id } = useParams();
    const [friend,setFriend] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const data = JSON.parse(localStorage.getItem("userData"));

    useEffect (() => {
        fetch(`http://localhost:3000/messages/${id}/${data._id}`)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then (data => setMessages(data));
        return () => {
            setMessages([]);
          };
    },[id,data._id])
    useEffect(() => {
        if(id) {
            fetch(`http://localhost:3000/users/friend/${id}`)
            .then((response) => 
                {if(response.ok){
                    return response.json()
                }})
                .then(data => {setFriend(data)})
                .catch(err => {
                    console.log(err);
                })
        }
        return () => {
            setMessages([]);
          };

    },[id])
    useEffect(() => {
        if(socket)
{
          socket.on("private message", (message) => {
            console.log("hi")
            console.log(message)
            setMessages((prevMessages) => [...prevMessages, message]);});
        }
          else{
            console.log("bad")
          }
          return () => {
            setMessages([]);
          };

    },[socket])
    const handleMessageSend = (e) => {
        e.preventDefault();
        if(newMessage.length !== 0){
        const createdMessage = {
            content: newMessage,
            sender: data._id,
            recipient: id,
            date: new Date(),
            read: false
        }
        fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createdMessage)
        })
            .then(response => {
                if (response.ok) {
                    console.log("Posted correctly");
                }
            })
            .catch(error => {
                // Handle network or other errors
                console.error("Network error:", error);
            });
        socket.emit("private message", { id: id, message: createdMessage});
        setMessages((prevMessages) => [...prevMessages, createdMessage]);
        setNewMessage("")}
    }
    return (
        id ?
        <div className="chat-container">
            
                {friend && 
                    <div className="chat-header" key={friend._id}>
                        <img src={friend.image_url} alt={friend.name} className="profile-pic"/>
                        <div className="name">{friend.name}</div>
                    </div>
                }
            <div className="chat-body">
                {messages && messages.length !== 0 && messages.map((item,index) => (
                    item.recipient === id ?
                    <div key={item._id ? item._id : index} className="sender-container">
                        <div className="send-container">
                            <div className="sender-message">{item.content}</div>
                        </div>
                    </div>:
                    <div key={item._id ? item._id : index} className="receiver-container">
                        <div className="receive-container">
                            <div className="recipient-message" >{item.content}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="chat-footer">
                <form onSubmit={(e) => handleMessageSend(e)}>
                    <input type="text" name="message" className="message" placeholder="Aa" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
                    <input type="submit" className="submit-message" value={"submit"}/>
                </form>
            </div>
        </div>:
        <div className="">no ID</div>
    )
}

export default Chat