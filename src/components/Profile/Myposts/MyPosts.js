import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let posts = props.posts.map((p) => <Post message={p.message} value={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = " ";
    }


    return (
        <div className={`${classes.myPost}`}>
            <h3> My posts</h3>
            <div className={`${classes.newPost}`}>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>
            {posts}
        </div>

    )

}
export default MyPosts;


