import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const PeopleToChat = () => {
    const [allFriends, setAllFriends] = useState([])
    const data = JSON.parse(localStorage.getItem("userData"));
 
    useEffect(() =>{
        fetch(`http://localhost:3000/users/friends/${data._id}`)
        .then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setAllFriends(data))
        .catch((err) =>{
            console.log(err);
        })
    },[])
    return (
        <>
        <div className="chat">
            <div className="chat-title">
                Chats
            </div>
        </div>
        <div className="friends-chat">
            {allFriends && allFriends.length !== 0 &&allFriends.map((item) => (
                <Link to={`/${item._id}`} key={item._id} style={{color: "black", textDecoration:"none"}}>
                <div className="chat-friend-container" >
                    <img src={item.image_url} alt={item.name} className="profile-pic"/>
                    <div className="name">{item.name}</div>
                </div>
                </Link>
            ))}
        </div>
        </>
    )
}

export default PeopleToChat