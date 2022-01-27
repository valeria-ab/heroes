import React from 'react';
import './App.css';
import {api} from './api/api';
import {Route, Routes} from 'react-router-dom';
import {Favorites} from './components/Favorites';
import Cards from './components/Cards/Cards';
import {HeroPersonalCard} from './components/Cards/Card/Card';

export type ResponseType = {
    count: number
    next: string
    previous: string
    results: HeroType[]
}
export type HeroType = {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: Array<string>
    species: Array<any>
    vehicles: Array<any>
    starships: Array<any>
    created: string
    edited: string
    url: string
}

type StateType = {
    heroes: HeroType[]
    favorites: HeroType[]
    heroesTotalCount: number
    isLoading: boolean
    page: number
    isFavorite: boolean
};


export class App extends React.Component<{}, StateType> {

    constructor(props: {}) {
        super(props)
        this.state = {
            heroesTotalCount: 0,
            isLoading: true,
            page: 1,
            heroes: [] as HeroType[],
            favorites: [] as HeroType[],
            isFavorite: false
        }
        this.onPageChanged = this.onPageChanged.bind(this)
    }

    async onPageChanged(page: number) {
        this.setState({
            isLoading: true
        })

        this.setState({
            heroes: await api.getNextPage(page),
            isLoading: false,
        })

    }

    async componentDidMount() {
        const result = await api.getHeroes()
        try {
            this.setState({
                heroes: result.results,
                heroesTotalCount: result.count,
                isLoading: false
            })
        } catch (e) {
        }

    }

    addToFavorites = (hero: HeroType) => {
        if (!this.state.favorites.includes(hero)) {
            this.setState({
                ...this.state,
                favorites: [...this.state.favorites, hero]
            })
        }
    }

    removeFromFavorites = (hero: HeroType) => {
        if (this.state.favorites.includes(hero)) {
            this.setState({
                ...this.state,
                favorites: this.state.favorites.filter(
                    h => h.name !== hero.name
                )
            })
        }
    }


    render() {
        console.log('app')
        const {isLoading, heroes, heroesTotalCount, favorites} = this.state

        if (isLoading) return <div>Loading...</div>

        return (
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route
                            path={'/'}
                            element={<Cards
                                heroes={heroes}
                                favorites={favorites}
                                heroesTotalCount={heroesTotalCount}
                                onPageChanged={this.onPageChanged}
                                addToFavorites={this.addToFavorites}
                                removeFromFavorites={this.removeFromFavorites}
                            />
                            }
                        />
                        <Route path={'/hero/:nameHero'}
                               element={<HeroPersonalCard
                                   heroes={heroes}
                               />
                               }
                        />
                        <Route path={'/favorites'}
                               element={<Favorites
                                   favorites={favorites}
                                   removeFromFavorites={this.removeFromFavorites}
                               />
                               }
                        />
                    </Routes>
                </header>
            </div>
        )
    }
}