import {HeroType} from '../../App';
import React from 'react';
import s from '../Cards/Cards.module.css';
import Card from '../Cards/Card/Card';
import {Sorting} from '../Sorting/Sorting';


type PropsType = {
    favorites: HeroType[]
    removeFromFavorites: (hero: HeroType) => void
    onPageChanged: (page: number) => void
    setPortion: (pagePortion: number) => void
}
type StateType = {
    sortedFavorites: HeroType[],
}

export class Favorites extends React.Component<PropsType, StateType> {

    constructor(props: PropsType) {
        super(props)
        this.state = {
            sortedFavorites: [] as HeroType[],
        }
    }

    setSortedFavorites = (sortedFavorites: HeroType[]) => {
        this.setState({
            ...this.state,
            sortedFavorites: sortedFavorites
        })
    }

    sortByName = () => {
        const favorites = [...this.props.favorites]
        // const favorites = this.props.favorites
        const sortedFavorites = favorites.sort(
            function (a, b) {
                let nameA = a.name.toLowerCase()
                let nameB = b.name.toLowerCase()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            }
        )
        this.setSortedFavorites(sortedFavorites)
    }

    componentWillUnmount() {
        this.setSortedFavorites([])
        this.props.onPageChanged(1)
        this.props.setPortion(1)
    }

    render() {
        console.log("sort")
        console.log(this.props.favorites)
        console.log(this.state.sortedFavorites)
        return (
            <div>
                <span>Favorites</span>

                {
                    this.props.favorites.length
                        ? <>
                            <Sorting sortByName={this.sortByName}/>
                            <div className={s.cards}>
                                {this.state.sortedFavorites.length > 0

                                    ? this.state.sortedFavorites.map(h => <Card hero={h}
                                                                                addRemoveButtonName={'remove from favs'}
                                                                                addToOrRemoveFromFavorites={this.props.removeFromFavorites}

                                    />)
                                    : this.props.favorites.map(h => <Card hero={h}
                                                                          addRemoveButtonName={'remove from favs'}
                                                                          addToOrRemoveFromFavorites={this.props.removeFromFavorites}

                                    />)}

                            </div>
                        </>
                        : <div>you haven't added anything yet..</div>
                }


            </div>
        )
    }
}
