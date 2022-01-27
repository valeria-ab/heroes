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

    const sortedHeroes = props.heroes.map(hero => ({
        ...hero,
        isFavorite: props.favorites.find(f => {
            if (hero.name === f.name) {
                return true
            } else {
                return false
            }
        })
    }))

    return (<div>
            <div>
                <Pagination heroesTotalCount={props.heroesTotalCount}
                            onPageChanged={props.onPageChanged}
                            page={props.page}
                            setPage={props.setPage}
                />
            </div>
            <div className={s.cards}>

                {sortedHeroes.map(h => <Card hero={h}
                                             addRemoveButtonName={h.isFavorite
                                                 ? 'remove from favs'
                                                 : 'add to favs'
                                             }
                                             addToOrRemoveFromFavorites={h.isFavorite
                                                 ? props.removeFromFavorites
                                                 : props.addToFavorites}
                />)}
            </div>

        </div>
    );
}

export default Cards;
