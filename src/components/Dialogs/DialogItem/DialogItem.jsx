import React from "react"
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom"


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.avatar}
                src={'https://rmi.org/wp-content/uploads/2019/05/avatar-default-icon.png'}/>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem;