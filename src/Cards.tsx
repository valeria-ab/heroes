import React from 'react';
import './App.css';
import Card from './Card';
import {HeroType} from './App';


function Cards(props: {heroes: HeroType[]}) {
  return (
    <div>
        {props.heroes.map(h => <Card name={h.name}/>)}
    </div>
  );
}

export default Cards;
