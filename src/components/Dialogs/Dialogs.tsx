import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

interface DialogsProps {
    //
}

interface DialogItemProps {
    name: string;
    id: string;
}

const DialogItem: React.FC<DialogItemProps> = ({ name, id }) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={`/dialogs/${id}`} className={s.dialog}>{name}</NavLink>
        </div>
    );
};

interface MessageItemProps {
    message: string;
}

const Message: React.FC<MessageItemProps> = ({ message }) => {
    return (
        <div className={s.message}>{message}</div>
    );
};

const Dialogs: React.FC<DialogsProps> = () => {
    return (
        <div className={s.dialogs}>
            <div>
            <DialogItem name='Horse' id='1'/>
            <DialogItem name='Pawn' id='2'/>
            <DialogItem name='Officer' id='3'/>
            </div>
        <div>
            <Message message='Hi!'/>
            <Message message='Would you like to play chess with me?'/>
            <Message message='Hello, I`d like to play!'/>
        </div>
        </div>
    );
};

export default Dialogs;