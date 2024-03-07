import React from 'react';
import s from "./Dialogs.module.css"


interface DialogsProps {
    message?: string;
}

const Dialogs: React.FC<DialogsProps> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialosItem}>
                <div className={s.dialog}>
                    Horse
                </div>
                <div className={s.dialog}>
                    Officer
                </div>
                <div className={s.dialog}>
                    Pawn
                </div>
            </div>
            <div className={s.messages}>
            <div className={s.message}>Hi!</div>
            <div className={s.message}>Would you like to play chess with me?</div>
            <div className={s.message}>Hello, I`d like to play!</div>
        </div>
        </div>
    );
};

export default Dialogs;