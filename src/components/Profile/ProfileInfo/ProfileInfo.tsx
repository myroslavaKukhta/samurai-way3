import React from 'react';
import s from "./ProfileInfo.module.css";
import picture from "../../../img/picture.webp";
import ava from "../../../img/ava.webp";

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.bigPicture} src={picture} alt='logo'/>
            <div>
                <img className={s.avatar} src={ava} alt='ava'/>
            </div>
        </div>
    );
};

export default ProfileInfo;