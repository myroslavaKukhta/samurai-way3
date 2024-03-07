import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts: React.FC = () => {
    let postsData = [
        { id: 1, post: 'Hi, how are you?' },
        { id: 2, post: "Good, glad to see you!" },
        { id: 3, post: "Let`s play!" },
    ];

    let postsElements = postsData.map(p => <Post key={p.id} message={p.post}/>);

    return (
        <div>
            <textarea></textarea>
            <button className={s.button}>Add post</button>
            <button className={s.button}>Remove</button>
            {postsElements}
        </div>
    );
};

export default MyPosts;
