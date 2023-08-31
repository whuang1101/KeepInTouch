import { useEffect, useState } from "react"
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';
const FriendRequest = () => {
    const [allUsers, setAllUsers] = useState(null)
    const data = JSON.parse(localStorage.getItem("userData"))
    useEffect(() => {
        fetch("http://localhost:3000/users").then(response => {
            if(response.ok){
                return response.json();
            }
            else{
                throw new Error("Network response was not ok")
            }
        }).then(data => {setAllUsers(data)})},[]);
    const handleFriendRequest = (newRecipient) => {
        const body = {
            recipient: newRecipient,
            sender: data.email,
        }
        fetch("http://localhost:3000/friend-request", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then(response => {
            if (response.ok){
                console.log("yay")
            }
            else {
                throw new Error(response.status);
              }
        }).catch((err) =>
        console.log(err))
    }
    return (<div className="friends">
        <div className="friend-request">Friend Requests</div>
        {allUsers && 
        <div className="potential-friends">
            <div className="potential-friends-title">Potential Friends</div>
            {allUsers.map((user) => (
                user.email !== data.email &&
                <div className="potential-friend" key={user._id}>
                    <div className="first-half">
                        <img src={`${user.image_url}`} alt={`${user.name} profile pic`} style={{height:"2em", borderRadius:"1em"}}/>
                        <div className="potential-friend-name">{user.name}</div>
                    </div>
                    <Icon path={mdiAccountPlus} size={1} onClick={()=> (handleFriendRequest(user.email))} />
                </div>
            ))}
        </div>}
        </div>
    )
}

export default FriendRequest