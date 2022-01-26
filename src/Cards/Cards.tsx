import React from 'react';
import '../App.css';
import Card from './Card/Card';
import {HeroType} from '../App';
import s from './Cards.module.css';
import {Pagination} from '../Pagination';


function Cards(props: {
    heroes: HeroType[],
    heroesTotalCount: number
    onPageChanged: (page:number) => void
}) {


    return (<div>
        <div className={s.cards}>
            {props.heroes.map(h => <Card hero={h}/>)}
        </div>
            <Pagination heroesTotalCount={props.heroesTotalCount} onPageChanged={props.onPageChanged}/>
        </div>
    );
}

export default Cards;
