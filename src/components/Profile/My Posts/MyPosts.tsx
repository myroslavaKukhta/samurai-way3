import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

interface PostsProps {
    postsData: {
        id: number;
        post: string;
    }[];
}

const MyPosts: React.FC<PostsProps> = (props) => {


    let postsElements = props.postsData.map(p => <Post key={p.id} message={p.post}/>);

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
