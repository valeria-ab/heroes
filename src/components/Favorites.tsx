import {HeroType} from '../App';
import Cards from './Cards/Cards';
import React from 'react';
import s from './Cards/Cards.module.css';
import Card from './Cards/Card/Card';
import {NavLink} from 'react-router-dom';

// type FavoritesType = {favorites: string[] }
type FavoritesType = {
    favorites: HeroType[]
    removeFromFavorites: (hero: HeroType) => void
}
export const Favorites = (props: FavoritesType) => {
    console.log(props)
    // console.log(props.favorites.length)
    return (
        <div>
            Favorites

            {/*<div>"props.favorites": {JSON.stringify(props.favorites, null, 2)}</div>*/}

            <div> "props.favorites.length": {props.favorites.length}</div>

            <div className={s.cards}>
                <div className={s.cards}>
                    {props.favorites.map(h => <Card hero={h}
                                                    addRemoveButtonName={"remove from favs"}
                                                    addToOrRemoveFromFavorites={props.removeFromFavorites}

                    />)}
                </div>
            </div>

            <div>
                <NavLink to={'/'}>
                    <button>back to heroes</button>
                </NavLink>

            </div>

        </div>
    )
}