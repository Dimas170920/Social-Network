import React from "react";
import s from "./Post.module.css";


const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src={'https://icon-library.com/images/icon-avatars/icon-avatars-16.jpg'}/>
            {props.message}
            <div>
                <span>Like: {props.like}</span>
            </div>

        </div>
    );

}
export default Post;