import PropTypes from 'prop-types';
import FriendRequest from './FriendRequest';
const ChatBar = ({middleScreen}) => {
    
    return(
        <div className="chat-bar">  
        {middleScreen === "chat" && 
        <div>Chat</div>
        }
        {middleScreen === "friend-request" &&
        <FriendRequest/>
        }

        </div>
    )
}
ChatBar.propTypes = {
    middleScreen: PropTypes.string.isRequired,
  };
export default ChatBar