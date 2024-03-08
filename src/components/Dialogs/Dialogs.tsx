import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

interface DialogsProps {
    dialogs: {
        id: number;
        name: string;
    }[];
    messages: {
        id: number;
        message: string;
    }[];
}

const Dialogs: React.FC<DialogsProps> = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id.toString()} name={d.name} id={d.id.toString()}/>);
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div>{dialogsElements}</div>
            <div>{messagesElements}</div>
        </div>
    );
};

export default Dialogs;