import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


interface PostsProps {
    posts: PostType[];
    addPost: (postMessage: string) => void;
    changeNewPostText: (newText: string) => void;
}

const MyPosts: React.FC<PostsProps> = ({ posts, addPost, changeNewPostText }) => {
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
