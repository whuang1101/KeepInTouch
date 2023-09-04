import { useEffect, useState } from "react"
import Icon from '@mdi/react';
import { mdiCircleSmall } from "@mdi/js";
const Friends = () => {
    const data = JSON.parse(localStorage.getItem("userData"));
    const [allFriends, setAllFriends] = useState([])
    useEffect(() =>{
        fetch(`https://red-silence-64.fly.dev/users/friends/${data._id}`)
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
        <div className="all-friends">
            <div className="online-title">Online Friends</div>
            { allFriends && allFriends.length !== 0 && allFriends.some(user => user.online)  ?
            allFriends && allFriends.map((item) => (
                item.online &&
                <div className="online-friend-container" key={item._id}>
                    <div className="first-half">
                        {item.image_url ?
                        <img src={item.image_url} alt={item.name} className="profile-pic" />:
                        <img src={"https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg"} alt={item.name} className="profile-pic" />
                        }
                        <div className="name">{item.name}</div>
                    </div>
                    <Icon path={mdiCircleSmall} size={2} color={"lightgreen"} />

                </div>
            ))
            : 
            <div className="no-one">No one's online right now</div>
            }

        </div>
    )
}
export default Friends