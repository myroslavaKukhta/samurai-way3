import React from 'react';
import s from "./Message.module.css";

interface MessageItemProps {
    message: string;
}

const Message: React.FC<MessageItemProps> = ({ message }) => {
    return (
        <div className={s.message}>{message}</div>
    );
};

export default Message;