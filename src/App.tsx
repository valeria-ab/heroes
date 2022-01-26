import React from 'react';
import './App.css';
import Cards from './Cards/Cards';
import {api} from './api/api';
import {Pagination} from './Pagination';
import RoutesComponent from './Routes';
import {Route, Routes} from 'react-router-dom';
import {HeroPersonalCard} from './Cards/Card/Card';

export type ResponceType = {
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
    heroes: HeroType[];
    heroesTotalCount: number;
    isLoading: boolean;
    page: number
};


export class App extends React.Component<{}, StateType> {

    constructor(props: {}) {
     super(props)
        this.state  = {
            heroesTotalCount: 0,
             isLoading: true,
               page: 1,
                heroes: []
        }
        this.onPageChanged = this.onPageChanged.bind(this)
    }

    async onPageChanged(page:number) {
        this.setState({
            isLoading: true
        })

       this.setState({

           heroes: await api.getNextPage(page),
           isLoading: false,
       })

   }

    async componentDidMount() {
        this.setState({
            heroes: await api.getHeroes(),
            heroesTotalCount: await api.getHeroesTotalCount(),
            isLoading: false
        })
    }


    render() {
        console.log("App")
        const {isLoading, heroes, heroesTotalCount} = this.state

        if (isLoading) return <div>Loading...</div>

        return (
            <div className="App">
                <header className="App-header">


                    <Routes>
                        <Route path={"/"} element={  <Cards heroes={heroes} heroesTotalCount={heroesTotalCount} onPageChanged={this.onPageChanged} />} />
                        <Route path={"/hero"} element={<HeroPersonalCard/>} />
                    </Routes>
                </header>
            </div>
        )
    }
}