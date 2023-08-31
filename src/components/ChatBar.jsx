const ChatBar = ({middleScreen}) => {
    return(
        <div className="chat-bar">  
        {middleScreen === "chat" && 
        <div>Chat</div>
        }
        {middleScreen === "friend-request" &&
        <>
        <div className="friend-request">Friend Request</div>
        <input type="text" />
        </>
        }

        </div>
    )
}
export default ChatBar