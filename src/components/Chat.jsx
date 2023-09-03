import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Chat = ({socket}) => {
    const { id } = useParams();
    const [friend,setFriend] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const data = JSON.parse(localStorage.getItem("userData"));


    useEffect(() => {
        if(id) {
            fetch(`http://localhost:3000/users/friend/${id}`)
            .then((response) => 
                {if(response.ok){
                    return response.json()
                }})
                .then(data => {setFriend(data),console.log(data)})
                .catch(err => {
                    console.log(err);
                })
        }
        setMessages([])
    },[id])
    useEffect(() => {
        if(socket)
{        socket.on("chat message", (message) => {
            console.log(message)
          });
          socket.on("private message", (message) => {
            console.log("hi")
            console.log(message)
            setMessages((prevMessages) => [...prevMessages, message]);});
        }
          else{
            console.log("bad")
          }

    },[socket])
    const handleMessageSend = (e) => {
        e.preventDefault();
        const createdMessage = {
            content: newMessage,
            sender: data._id,
            recipient: id,
            date: new Date(),
        }
        socket.emit("private message", { id: id, message: createdMessage});
        setMessages((prevMessages) => [...prevMessages, createdMessage]);
        setNewMessage("")
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
                {messages && messages.length !== 0 && messages.map(item => (
                    <div className="hi" key={Math.random(1000)}>{item.content}</div>
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