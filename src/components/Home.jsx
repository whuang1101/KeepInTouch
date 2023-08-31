import { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import ChatBar from "./ChatBar"
import Chat from "./Chat"
import "../css/homepage.css"
import { io } from "socket.io-client";

const Home = () => {
    const [middleScreen, setMiddleScreen] = useState("chat")
    const data = JSON.parse(localStorage.getItem("userData"))
    useEffect(() => {
        const socket = io("http://localhost:3000",
        {query: {username: data.email }});
        return() => {     
            socket.disconnect()
        }
    },[])
    const logout = () => {
        window.open("http://localhost:3000/auth/logout", "_self")
    }
    return(
        <div className="homepage">
            <Sidebar setMiddleScreen={setMiddleScreen}/>
            <ChatBar middleScreen ={middleScreen}/>
            <Chat/>
        </div>
    )
}

export default Home