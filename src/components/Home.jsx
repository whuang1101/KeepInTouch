import { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import ChatBar from "./ChatBar"
import Chat from "./Chat"
import "../css/homepage.css"
import { io } from "socket.io-client";

const Home = () => {
    const [middleScreen, setMiddleScreen] = useState("chat");
    const data = JSON.parse(localStorage.getItem("userData"));
    const [socket, setSocket] = useState(null)
    useEffect(() => {
        const newSocket = io('http://localhost:3000', {
          query: { username: data._id },
        });
      
        setSocket(newSocket);
        
        return () => {
          newSocket.disconnect();
        };
      }, []);

    return(
        <div className="homepage">
            <Sidebar setMiddleScreen={setMiddleScreen} middleScreen={middleScreen}/>
            <ChatBar middleScreen ={middleScreen}/>
            <Chat socket={socket}/>
        </div>
    )
}

export default Home