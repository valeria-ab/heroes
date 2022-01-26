import React from 'react';
import '../../App.css';
import s from './Card.module.css'
import {HeroType} from '../../App';
import { NavLink } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
function Card(props: {hero: HeroType}) {
    // const hero = api.getHeroes()


  return (
      <div className={s.card}  >
        <div>name: {props.hero.name}</div>
        <div>gender: {props.hero.gender}</div>
        <div>birth_year: {props.hero.birth_year}</div>
          <NavLink to={'/hero'}><button>жми</button></NavLink>
        {/*<div>films: {props.hero.films}</div>*/}
    </div>
  );
}

export const HeroPersonalCard = () => {
    return <div>HeroPersonalCard</div>
}

export default Card;
