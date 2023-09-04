import { useEffect, useState } from "react"

const Friends = () => {
    const data = JSON.parse(localStorage.getItem("userData"));
    const [allFriends, setAllFriends] = useState([])
    useEffect(() =>{
        fetch(`https://keepintouch-server-production.up.railway.app/users/friends/${data._id}`)
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
            <div className="friend-title">Friends</div>
            {allFriends && allFriends.map((item) => (
                <div className="friend-container" key={item._id}>
                    <div className="first-half">
                        {item.image_url ?
                        <img src={item.image_url} alt={item.name} className="profile-pic" />:
                        <img src={"https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg"} alt={item.name} className="profile-pic" />
                        }
                        
                        <div className="name">{item.name}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Friends