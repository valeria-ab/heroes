import React from 'react';
import '../App.css';
import Card from './Card/Card';
import {HeroType} from '../App';
import s from './Cards.module.css';


function Cards(props: { heroes: HeroType[] }) {


    return (
        <div className={s.cards}>
            {props.heroes.map(h => <Card hero={h}/>)}

        </div>
    );
}

export default Cards;
