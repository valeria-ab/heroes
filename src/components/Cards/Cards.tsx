import React from 'react';
import Card from './Card/Card';
import s from './Cards.module.scss';
import {HeroType} from '../../App';
import {Pagination} from '../Pagination/Pagination';

type PropsType = {
    page: number
    pagePortion: number
    heroes: HeroType[],
    favorites: HeroType[],
    heroesTotalCount: number
    onPageChanged: (page: number) => void
    addToFavorites: (hero: HeroType) => void
    removeFromFavorites: (hero: HeroType) => void
    setPortion: (pagePortion: number) => void
};


export class Cards extends React.Component<PropsType> {

    render() {

        return (<div>
                <div>
                    <Pagination heroesTotalCount={this.props.heroesTotalCount}
                                onPageChanged={this.props.onPageChanged}
                                page={this.props.page}
                                pagePortion={this.props.pagePortion}
                                setPortion={this.props.setPortion}
                    />
                </div>
                <div className={s.cards}>

                    {this.props.heroes.map(
                        h => this.props.favorites.map(
                            f => f.name).includes(h.name)
                            ? <Card hero={h}
                                    key={h.name}
                                    addRemoveButtonName={'remove from favorites'}
                                    addToOrRemoveFromFavorites={this.props.removeFromFavorites}

                            />
                            : <Card hero={h}
                                    key={h.name}
                                    addRemoveButtonName={'+ add to favorites'}
                                    addToOrRemoveFromFavorites={this.props.addToFavorites}
                            />
                    )
                    }

                </div>

            </div>
        );
    }
}

export default Cards;
