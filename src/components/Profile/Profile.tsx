import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

interface PostsProps {
    postsData: {
        id: number;
        post: string;
    }[];
}

const Profile: React.FC<PostsProps> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} />
        </div>
    );
};

export default Profile;