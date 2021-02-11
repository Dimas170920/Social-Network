import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/store";

export const rerenderEntireTree = (props) =>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props}
                     addPost = {addPost}
                     updateNewPostText = {updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}





