import {NavLink} from 'react-router-dom';
import s from './Header.module.scss';
import React from 'react';

export class Header extends React.Component {


    render() {
        return <div className={s.header}>
            <NavLink to={'/'}>
                <span className={s.headerSpan}>all characters</span>
            </NavLink>
            <span className={s.slash}>/</span>
            <NavLink to={'/favorites'}>
                <span className={s.headerSpan}>my favorites</span>
            </NavLink>
        </div>
    }
}