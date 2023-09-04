import Icon from '@mdi/react';
import { mdiMessage, mdiAccountMultiple, mdiChatProcessing, mdiExitToApp, mdiShopping, mdiArchive} from '@mdi/js';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Sidebar = ({setMiddleScreen, middleScreen, setUser}) => {
    const data = JSON.parse(localStorage.getItem("userData"));
    const [chatHover,setChatHover] = useState(false);
    const [onlineHover, setOnlineHover] = useState(false);
    const [requestHover, setRequestHover] = useState(false);
    const [fakeHover, setFakeHover] = useState(false);
    const [fake2, setFake2] = useState(false)
    const logout = () => {
        window.open("https://red-silence-64.fly.dev/auth/logout", "_self")
        setUser(null)
        localStorage.setItem("userData", null);
    }
    const chatEnter = () => {
        setChatHover(true);
    }
    const chatLeave = () => {
        setChatHover(false);
    }   
    const onlineEnter = () => {
        setOnlineHover(true);
    }
    const onlineLeave = () => {
        setOnlineHover(false);
    }
    const requestEnter = () => {
        setRequestHover(true);
    }
    const requestLeave = () => {
        setRequestHover(false);
    }
    const fakeEnter = () => {
        setFakeHover(true);
    }
    const fakeLeave = () => {
        setFakeHover(false);
    }
    const anotherFakeEnter = () => {
        setFake2(true);
    }
    const anotherFakeLeave = () => {
        setFake2(false);
    }
    return(
        <div className="side-bar">
            <nav className='top-half'>
                 {middleScreen === "chat" ?
                <div style={{backgroundColor:"rgb(245,245,245)"}}   
                onMouseEnter={chatEnter}
                onMouseLeave={chatLeave}
                 className='chat-icon'>
                    <Icon path={mdiMessage} size={1.1} color={"rgb(0,0,0"} />
                    {chatHover && <div className="chat-display-message">Chats</div>}
                </div>:
                <motion.div style={{backgroundColor:"rgb(255,255,255)"}}
                 whileHover={{backgroundColor:"rgb(245,245,245)"}} 
                 onMouseEnter={chatEnter}
                 onMouseLeave={chatLeave}
                 className='online-icon'
                 onClick={() => setMiddleScreen("chat")}>
                    <Icon path={mdiMessage} size={1.1} color={"rgb(96,98,102)"} />
                    {chatHover && <div className="online-display-message">Chats</div>}
                </motion.div>
                }
                {middleScreen === "friends" ?  <div  className='online-icon' style={{backgroundColor:"rgb(245,245,245)"}}
                 onMouseEnter={onlineEnter}
                 onMouseLeave={onlineLeave}
                 >
                    <Icon path={mdiAccountMultiple} size={1.1} color={"rgb(0,0,0)"}/>
                    {onlineHover && <div className="online-display-message">Online Friends</div>}
                </div>:                 
                <motion.div  className='online-icon' 
                onMouseEnter={onlineEnter}
                onMouseLeave={onlineLeave}
                whileHover={{backgroundColor:"rgb(245,245,245)"}}
                initial={{backgroundColor:"rgb(255,255,255)"}}
                onClick={() =>setMiddleScreen("friends")}
                 >
                    <Icon path={mdiAccountMultiple} size={1.1} color={"rgb(96,98,102)"}/>
                    {onlineHover && <div className="online-display-message">Online Friends</div>}
                </motion.div>}
                {middleScreen === "friend-request" ?
                <div  className='request-icon' 
                style={{backgroundColor:"rgb(245,245,245)"}}
                onMouseEnter={requestEnter}
                onMouseLeave={requestLeave}
                onClick={() => {setMiddleScreen("friend-request")}} >
                    <Icon path={mdiChatProcessing} size={1.1} color={"rgb(0,0,0)"}/>
                    {requestHover && <div className="request-display-message">Friend Requests</div>}

                </div>:
                
                <motion.div  className='request-icon' 
                whileHover={{backgroundColor:"rgb(245,245,245)"}}
                style={{backgroundColor:"rgb(255,255,255)"}}
                onMouseEnter={requestEnter}
                onMouseLeave={requestLeave}
                onClick={() => {setMiddleScreen("friend-request")}} >
                    <Icon path={mdiChatProcessing} size={1.1} color={"rgb(96,98,102)"}/>
                    {requestHover && <div className="request-display-message">Friend Requests</div>}

                </motion.div>
                }
                <motion.div  className='fake-icon' 
                whileHover={{backgroundColor:"rgb(245,245,245)"}}
                style={{backgroundColor:"rgb(255,255,255)"}}
                onMouseEnter={fakeEnter}
                onMouseLeave={fakeLeave}
                >
                    <Icon path={mdiShopping} size={1.1} color={"rgb(96,98,102)"}/>
                    {fakeHover && <div className="fake-display-message">Not implemented</div>}

                </motion.div>
                <motion.div  className='fake-icon' 
                whileHover={{backgroundColor:"rgb(245,245,245)"}}
                style={{backgroundColor:"rgb(255,255,255)"}}
                onMouseEnter={anotherFakeEnter}
                onMouseLeave={anotherFakeLeave}
                 >
                    <Icon path={mdiArchive} size={1.1} color={"rgb(96,98,102)"}/>
                    {fake2 && <div className="fake-display-message">Not implemented</div>}

                </motion.div>
            </nav>
            <div className="logout-profile">
                <img src={data.image_url ? data.image_url : "data:image/jpeg;base64,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"} alt="profile-pic" className='profile-pic'/>
                <Icon path={mdiExitToApp} size={1.1} onClick={() => logout()}/>
            </div>
        </div>
    )
}
Sidebar.propTypes = {
    setMiddleScreen: PropTypes.func.isRequired,
    middleScreen: PropTypes.string.isRequired,
  };
export default Sidebar