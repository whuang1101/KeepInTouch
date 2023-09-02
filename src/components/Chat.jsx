import { useEffect } from "react"

const Chat = ({socket}) => {
    useEffect(() => {
        socket.on("chat message", (message) => {
            console.log(message)
          });
    },[])
    const handleMessageSend = () => {
        socket.emit("chat message", "hi")
    }
    return (
        <div className="chat">
            <button onClick={handleMessageSend}>hi</button>
        </div>
    )
}

export default Chat