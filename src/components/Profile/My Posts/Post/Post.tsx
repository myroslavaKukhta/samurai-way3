import React from 'react';
import s from "./Post.module.css";
import pawn from "../../../../img/pawn.webp";

const Post = () => {
    return (
        <div>
            <img className={s.avatar} src={pawn} alt={pawn}/>
            <div className={s.item}>post</div>
        </div>
    );
};

export default Post;