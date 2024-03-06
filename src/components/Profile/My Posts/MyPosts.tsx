import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button className={s.button}>Add post</button>
            <button className={s.button}>Remove</button>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default MyPosts;