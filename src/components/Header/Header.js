import React from 'react';
import banner from "../../banner.jpg";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className= {`${classes.header}`}>
            <img src={banner}/>
        </header> )
}
export default Header;