import Icon from '@mdi/react';
import { mdiMessage, mdiAccountMultiple, mdiChatProcessing} from '@mdi/js';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Sidebar = ({setMiddleScreen}) => {
    const handleSetMiddleScreen = (name) => {
        console.log(name)
    }
    return(
        <div className="side-bar">
            <nav className='top-half'>
                <motion.div initial={{backgroundColor:"rgb(255,255,255)"}}
                 whileHover={{backgroundColor:"rgb(245,245,245)"}} 
                 className='icon'>
                    <Icon path={mdiMessage} size={1} color={"rgb(96,98,102)"} />
                </motion.div>
                <motion.div  className='icon' 
                whileHover={{backgroundColor:"rgb(245,245,245)"}}
                initial={{backgroundColor:"rgb(255,255,255)"}}
                 >
                    <Icon path={mdiAccountMultiple} size={1} color={"rgb(96,98,102)"}/>
                </motion.div>
                <motion.div  className='icon' 
                whileHover={{backgroundColor:"rgb(245,245,245)"}}
                initial={{backgroundColor:"rgb(255,255,255)"}}
                onClick={() => {setMiddleScreen("friend-request")}} >
                    <Icon path={mdiChatProcessing} size={1} color={"rgb(96,98,102)"}/>
                </motion.div>

            </nav>
        </div>
    )
}

export default Sidebar