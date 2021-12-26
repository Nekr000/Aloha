import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let posts = props.posts.map((p) => <Post message={p.message} value={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {

        props.addPost();  // 1й вариант

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // let action = updateNewPostTextActionCreator(text);
        // props.dispatch(action);  // 2й вариант ( одно и тоже)
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
                <button onClick={onAddPost}>Add Post</button>
            </div>
            {posts}
        </div>

    )

}
export default MyPosts;


