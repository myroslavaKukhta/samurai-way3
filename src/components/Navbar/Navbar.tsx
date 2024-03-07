import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={s.item}>Messages</NavLink >
            </div>
            <div className={s.item}>
                <NavLink to='/play' className={s.item}>Play</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/games' className={s.item}>Games</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={s.item}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;