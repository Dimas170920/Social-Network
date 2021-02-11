import React from "react"
import s from "./Message.module.css"

const Message = (props) => {

    if ((props.id / 2 ^ 0) === props.id / 2) {
        return <div className={s.message + ' ' + s.messageMy}>{props.message}</div>
    } else {
        return <div className={s.message + ' ' + s.messageAnother}>{props.message}</div>
    }


}

export default Message;