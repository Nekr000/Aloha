import React from "react";
import classes from "./ProfileInfo.module.css"
import mainContentBanner from "../main-content-banner.jpg";

const ProfileInfo = (props) => {
    return (
        <div >



            <div className={`${classes.descriptionBlock}`}>
                <img className={`${classes.banner}`} src={mainContentBanner}/>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;