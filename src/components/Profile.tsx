import React from 'react';
import picture from "../img/picture.webp";
import old from "../img/old.webp";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.bigpicture} src={picture} alt='logo'/>
            <div>
                <img className={s.avatar} src={old} alt='old'/>
            </div>

            <div>
            My posts
                <div className={s.posts}>New post</div>
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>
            </div>
        </div>
    );
};

export default Profile;