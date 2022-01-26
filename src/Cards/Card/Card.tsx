import React from 'react';
import '../../App.css';
import s from './Card.module.css'
import {HeroType} from '../../App';

function Card(props: {hero: HeroType}) {
    // const hero = api.getHeroes()


  return (
    <div className={s.card}>
        <div>name: {props.hero.name}</div>
        <div>gender: {props.hero.gender}</div>
        <div>birth_year: {props.hero.birth_year}</div>
        {/*<div>films: {props.hero.films}</div>*/}
    </div>
  );
}

export default Card;
