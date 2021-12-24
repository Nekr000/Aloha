import React from 'react';
import classes from "./Post.module.css";
import avatar from "./avatar1.jpg"


const Post = (props) => {
    return (
        <div className={`${classes.item}`}>
            <img src={avatar}/>
            {props.message}
            <div>
                <span>like  {[props.value]}</span>
            </div>
        </div>
    )
}
export default Post;
