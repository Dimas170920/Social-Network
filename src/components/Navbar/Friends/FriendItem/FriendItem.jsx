import React from "react"
import s from "./FriendItem.module.css"



const FriendItem = (props) => {

    return(
        <div className={s.friend}>
                <img className={s.avatar}
                src={'https://rmi.org/wp-content/uploads/2019/05/avatar-default-icon.png'}/>
                <div>{props.name}</div>

        </div>
    )
}

export default FriendItem;