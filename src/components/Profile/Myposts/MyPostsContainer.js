import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());  // 1й вариант
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);  // 2й вариант ( одно и тоже)
    }

    return ( <MyPosts updateNewPostText={onPostChange}
                      addPost={addPost}
                      posts={state.profilePage.postsData}
                      newPostText={state.profilePage.newPostText}  />
    )

}
export default MyPostsContainer;


