import {HeroType} from '../../App';
import React from 'react';
import s from './Favorites.module.scss';
import style from './../Cards/Cards.module.scss';
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

    componentDidUpdate(prevProps: PropsType, prevState: StateType, snapshot: any) {
        if (this.props.favorites !== prevProps.favorites) {
            this.setSortedFavorites(this.state.sortedFavorites.filter(sf => this.props.favorites.includes(sf) && sf))
        }
    }


    componentWillUnmount() {
        this.setSortedFavorites([])
        this.props.onPageChanged(1)
        this.props.setPortion(1)
    }

    render() {

        return (
            <div className={s.favorites}>

                {
                    this.props.favorites.length
                        ? <>
                            <Sorting sortByName={this.sortByName}/>
                            <div className={style.cards}>
                                {this.state.sortedFavorites.length > 0

                                    ? this.state.sortedFavorites.map(h => <Card hero={h}
                                                                                addRemoveButtonName={'remove from favorites'}
                                                                                addToOrRemoveFromFavorites={this.props.removeFromFavorites}

                                    />)
                                    : this.props.favorites.map(h => <Card hero={h}
                                                                          addRemoveButtonName={'remove from favorites'}
                                                                          addToOrRemoveFromFavorites={this.props.removeFromFavorites}

                                    />)}

                            </div>
                        </>
                        : <div className={s.message}>you haven't added anything yet..</div>
                }


            </div>
        )
    }
}
