import React from 'react';
import './App.css';
import Cards from './Cards';
import {api} from './api/api';

export type Responce = {
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
    isLoading: boolean;
};


export class App extends React.Component<{}, StateType> {
    // constructor() {
    //  super()
    //     this.state  = {
    //         heroes: [],
    //         isLoading: true
    //     }
    // }
    state: StateType = {
        heroes: [],
        isLoading: true
    }

    async componentDidMount() {
        this.setState({
            heroes: await api.getHeroes(),
            isLoading: false
        })
    }


    render() {
        const {isLoading, heroes} = this.state

        if (isLoading) return <div>Loader...</div>

        return (
            <div className="App">
                <header className="App-header">
                    <Cards heroes={heroes}/>
                </header>
            </div>
        )
    }
}