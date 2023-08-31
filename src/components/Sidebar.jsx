import Icon from '@mdi/react';
import { mdiMessage, mdiAccountMultiple, mdiChatProcessing, mdiExitToApp} from '@mdi/js';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';


const Sidebar = ({setMiddleScreen, middleScreen}) => {
    const logout = () => {
        window.open("http://localhost:3000/auth/logout", "_self")
    }
    return(
        <div className="side-bar">
            <nav className='top-half'>
                
                 {middleScreen === "chat" ?
                <div style={{backgroundColor:"rgb(245,245,245)"}}
                 className='icon'>
                    <Icon path={mdiMessage} size={1} color={"rgb(0,0,0"} />
                </div>:
                <motion.div style={{backgroundColor:"rgb(255,255,255)"}}
                 whileHover={{backgroundColor:"rgb(245,245,245)"}} 
                 className='icon'
                 onClick={() => setMiddleScreen("chat")}>
                    <Icon path={mdiMessage} size={1} color={"rgb(96,98,102)"} />
                </motion.div>
                }
                <motion.div  className='icon' 
                whileHover={{backgroundColor:"rgb(245,245,245)"}}
                initial={{backgroundColor:"rgb(255,255,255)"}}
                 >
                    <Icon path={mdiAccountMultiple} size={1} color={"rgb(96,98,102)"}/>
                </motion.div>
                {middleScreen === "friend-request" ?
                <div  className='icon' 
                style={{backgroundColor:"rgb(245,245,245)"}}
                onClick={() => {setMiddleScreen("friend-request")}} >
                    <Icon path={mdiChatProcessing} size={1} color={"rgb(0,0,0)"}/>
                </div>:
                
                <motion.div  className='icon' 
                whileHover={{backgroundColor:"rgb(245,245,245)"}}
                style={{backgroundColor:"rgb(255,255,255)"}}
                onClick={() => {setMiddleScreen("friend-request")}} >
                    <Icon path={mdiChatProcessing} size={1} color={"rgb(96,98,102)"}/>
                </motion.div>
                }
            </nav>
            <div className="logout">
                <Icon path={mdiExitToApp} size={1} onClick={() => logout()}/>
            </div>
        </div>
    )
}
Sidebar.propTypes = {
    setMiddleScreen: PropTypes.func.isRequired,
    middleScreen: PropTypes.string.isRequired,
  };
export default Sidebar