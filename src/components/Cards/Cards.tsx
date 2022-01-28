import React from 'react';
import Card from './Card/Card';
import s from './Cards.module.css';
import {HeroType} from '../../App';
import {Pagination} from '../Pagination/Pagination';


function Cards(props: {
    page: number
    setPage: (page: number) => void
    heroes: HeroType[],
    favorites: HeroType[],
    heroesTotalCount: number
    onPageChanged: (page: number) => void
    addToFavorites: (hero: HeroType) => void
    removeFromFavorites: (hero: HeroType) => void
}) {
    // console.log("Cards")
    // console.log(props.favorites)
    // const sortedHeroes = props.heroes.map(hero => {
    //         console.log(props.favorites.includes(hero))
    //         return ({
    //             ...hero,
    //             isFavorite: props.favorites.includes(hero)
    //             // isFavorite: props.favorites.find(f => hero.name === f.name)
    //         })
    //     }
    //
    // )


    return (<div>
            <div>
                <Pagination heroesTotalCount={props.heroesTotalCount}
                            onPageChanged={props.onPageChanged}
                            page={props.page}
                            setPage={props.setPage}
                />
            </div>
            <div className={s.cards}>

                {props.heroes.map(h => <Card hero={h}
                                             addRemoveButtonName={props.favorites.includes(h)
                                                 ? 'remove from favs'
                                                 : 'add to favs'
                                             }
                                             addToOrRemoveFromFavorites={props.favorites.includes(h)
                                                 ? props.removeFromFavorites
                                                 : props.addToFavorites}
                />)}
            </div>

        </div>
    );
}

export default Cards;
