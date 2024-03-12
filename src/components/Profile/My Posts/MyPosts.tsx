import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

interface PostsProps {
    posts: {
        id: number;
        post: string;
    }[];
    addPost: (postMessage: string) => void;
}

const MyPosts: React.FC<PostsProps> = ({ posts, addPost }) => {
    let postsElements = posts.map(p => <Post key={p.id} id={p.id} message={p.post}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            addPost(text);
            newPostElement.current.value = '';
        }
    };

    return (
        <div>
            <textarea ref={newPostElement}></textarea>
            <button className={s.button} onClick={onAddHandler}>Add post</button>
            <button className={s.button}>Remove</button>
            {postsElements}
        </div>
    );
};

export default MyPosts;
