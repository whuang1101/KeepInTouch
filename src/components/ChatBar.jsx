import PropTypes from 'prop-types';
import FriendRequest from './chatbar-components/FriendRequest';
import Friends from './chatbar-components/Friends';
const ChatBar = ({middleScreen}) => {
    
    return(
        <div className="chat-bar">  
        {middleScreen === "chat" && 
        <div>Chat</div>
        }
        {middleScreen === "friend-request" &&
        <FriendRequest/>
        }
        {middleScreen === "friends" && <Friends/>}

        </div>
    )
}
ChatBar.propTypes = {
    middleScreen: PropTypes.string.isRequired,
  };
export default ChatBar