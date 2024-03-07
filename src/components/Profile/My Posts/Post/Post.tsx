import React from 'react';
import s from "./Post.module.css";
import pawn from "../../../../img/pawn.webp";

interface PostProps {
    message: string;
}

const Post: React.FC<PostProps> = ({ message }) => {
    return (
        <div>
            <img className={s.avatar} src={pawn} alt="pawn"/>
            <div className={s.item}>{message}</div>
        </div>
    );
};

export default Post;