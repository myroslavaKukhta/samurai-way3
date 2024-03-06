import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='/profile' className={s.item}>Profile</a>
            </div>
            <div className={s.item}>
                <a href='/dialogs' className={s.item}>Messages</a>
            </div>
            <div className={s.item}>
                <a href='/play' className={s.item}>Play</a>
            </div>
            <div className={s.item}>
                <a href='/games' className={s.item}>Games</a>
            </div>
            <div className={s.item}>
                <a href='/settings' className={s.item}>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;