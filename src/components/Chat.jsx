import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiCircleSmall, mdiDotsHorizontal, mdiPhone, mdiSend, mdiVideo } from '@mdi/js';
const Chat = ({socket}) => {
    const { id } = useParams();
    const messageContainerRef = useRef(null);
    const [friend,setFriend] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const data = JSON.parse(localStorage.getItem("userData"));

    useEffect (() => {
        if(id) {
        fetch(`http://localhost:3000/messages/${id}/${data._id}`)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then (data => setMessages(data));
    }
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
    useEffect(() => {
        if (messageContainerRef.current) {
          messageContainerRef.current.scrollTop =
            messageContainerRef.current.scrollHeight;
        }
      }, [messages]);
    return (
        <div className="chat">
hi
        </div>
    )
}

export default Chat