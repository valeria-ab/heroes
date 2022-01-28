import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import React from 'react';

export class Header extends React.Component {


    render() {
        return <div>
            <NavLink to={'/'}>
                <span className={s.headerSpan}>Characters</span>
            </NavLink>
            <NavLink to={'/favorites'}>
                <span className={s.headerSpan}>favorites</span>
            </NavLink>
        </div>
    }
}