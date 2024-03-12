import React from 'react';
import { PostType } from "../../redux/state";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./My Posts/MyPosts"; // Переконайтеся, що PostType правильно імпортовано
import s from './Profile.module.css';

interface ProfileProps {
    postsData: PostType[];
    addPost: (postMessage: string) => void;
    changeNewPostText: (newText: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ postsData, addPost, changeNewPostText }) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={postsData} addPost={addPost} changeNewPostText={changeNewPostText }/>
        </div>
    );
};

export default Profile;