import React from 'react';
import './App.css';

function Card(props: {name: string}) {
    // const hero = api.getHeroes()


  return (
    <div>
        name:{props.name}
    </div>
  );
}

export default Card;
