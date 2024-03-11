import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

interface PostsProps {
    posts: {
        id: number;
        post: string;
    }[];
    addPost: (postMessage: string) => void; // Додано цю лінію
}

const MyPosts: React.FC<PostsProps> = ({ posts }) => {

    // Виправлення: передаємо id як пропс у компонент Post
    let postsElements = posts.map(p => <Post key={p.id} id={p.id} message={p.post}/>);

    const onAddHandler = () => {alert('Hey')};
    let newPostElement = React.createRef<HTMLTextAreaElement>();

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