import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import MyPostReduxForm from "./Post/MyPostForm/MyPostForm";

const MyPosts = (props) => {
    let postsElement =
        props.posts.map(p => <Post message={p.message} key={p.id} like={p.likeCount}/>);

    let onAddPost = (values) => {
        debugger;
        props.addPost(values.newPostBody);
    };

    return <div>
        <h4>My post</h4>
        <MyPostReduxForm onSubmit={onAddPost}/>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}


export default MyPosts;
