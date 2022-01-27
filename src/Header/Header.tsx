import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import React from 'react';

export const Header = () => {
    return <div>
        <NavLink to={'/'}>
            <span className={s.headerSpan}>Heroes</span>
        </NavLink>
        <NavLink to={'/favorites'}>
            <span className={s.headerSpan}>favorites</span>
        </NavLink>
    </div>
}