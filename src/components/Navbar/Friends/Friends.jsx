import React from "react"
import s from "./Friends.module.css"
import FriendItem from "./FriendItem/FriendItem";


const Friends = (props) => {
    let friendsItem = props.names.map(n=> <FriendItem name = {n.name} key = {n.id}/>);

    return(
        <div>
            <h4>Friends</h4>
            {friendsItem}
        </div>
    )
}

export default Friends;