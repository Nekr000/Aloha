import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (

        <div className= {`${classes.content}`}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;