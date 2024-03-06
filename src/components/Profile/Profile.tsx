import React from 'react';
import picture from "../../img/picture.webp";
import ava from "../../img/ava.webp";
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.bigpicture} src={picture} alt='logo'/>
            <div>
                <img className={s.avatar} src={ava} alt='ava'/>
            </div>
           <MyPosts/>
        </div>
    );
};

export default Profile;