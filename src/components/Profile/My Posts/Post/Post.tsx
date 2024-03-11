import React from 'react';
import s from "./Post.module.css";
import pawn from "../../../../img/pawn.webp"; // Переконайтеся, що шлях до зображення вірний

interface PostProps {
    id: number;
    message: string;
}

const Post: React.FC<PostProps> = ({ id, message }) => {
    return (
        <div className={s.post}>
            <img className={s.avatar} src={pawn} alt="pawn"/>
            <div>{message}</div>
        </div>
    );
};

export default Post;
