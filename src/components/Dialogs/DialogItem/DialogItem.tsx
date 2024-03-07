import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

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

export default DialogItem;