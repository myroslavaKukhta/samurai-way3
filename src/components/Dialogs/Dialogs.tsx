import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs: React.FC = () => {
    let dialogs = [
        { id: 1, name: 'Horse' },
        { id: 2, name: 'Pawn' },
        { id: 3, name: 'Officer' }
    ];

    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Would you like to play chess with me?' },
        { id: 3, message: 'Hello, I`d like to play!' }
    ];

    let dialogsElements = dialogs.map(d => <DialogItem key={d.id.toString()} name={d.name} id={d.id.toString()}/>);
    let messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div>{dialogsElements}</div>
            <div>{messagesElements}</div>
        </div>
    );
};

export default Dialogs;