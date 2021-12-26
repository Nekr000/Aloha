import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let posts = props.posts.map((p) => <Post message={p.message} value={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {

        props.dispatch(addPostActionCreator());  // 1й вариант

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);  // 2й вариант ( одно и тоже)
    }

    return (
        <div className={`${classes.myPost}`}>
            <h3> My posts</h3>
            <div className={`${classes.newPost}`}>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>
            {posts}
        </div>

    )

}
export default MyPosts;


