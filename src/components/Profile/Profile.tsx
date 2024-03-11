import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";


interface ProfileProps {
    postsData: PostType[];
    addPost: (postMessage: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ postsData, addPost }) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={postsData} addPost={addPost} />
        </div>
    );
};

export default Profile;