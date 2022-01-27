import React, {useState} from 'react';
import s from './Card.module.css'
import {NavLink, useParams} from 'react-router-dom';
import {HeroType} from '../../../App';

function Card(props:
                  {
                      hero: HeroType,
                      addToOrRemoveFromFavorites: (hero: HeroType) => void
                      addRemoveButtonName: string
                  }) {

    return (
        <div className={s.card}>
            <NavLink to={`/hero/${props.hero.name}`}>
                <div className={s.personalCard}>photo</div>
            </NavLink>
            <div className={s.name}>{props.hero.name}</div>

            <div>
                <span className={s.addToOrRemovefromFavs}
                     onClick={() => props.addToOrRemoveFromFavorites(props.hero)
                     }> {props.addRemoveButtonName}
                </span>
            </div>



        </div>

    );
}

type HeroPersonalCardProps = {
    heroes: HeroType[]
}

export type PlanetResponseType = {
    name: string,
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string,
    surface_water: string
    population: string
    residents: Array<string>
    films: Array<string>
    created: string
    edited: string
    url: string
}

export type VehicleResponseType = {
    name: string
    'model': string
    'manufacturer': string
    'cost_in_credits': string
    'length': string
    'max_atmosphering_speed': string
    'crew': string
    'passengers': string
    'cargo_capacity': string
    'consumables': string
    'vehicle_class': string
    'pilots': [],
    'films': Array<string>
    'created': string
    'edited': string
    'url': string
}

export const HeroPersonalCard = (props: HeroPersonalCardProps) => {

    const {nameHero} = useParams()
    const currentHero = props.heroes.find((hero) => hero.name === nameHero)


    if (currentHero) {
        return <div>
            <h2>*Hero Personal Card*</h2>

            <div className={s.cardDetails}>
                <div className={s.photo}>photo</div>
                <div className={s.description}>
                    *description*
                    <div>name: {currentHero.name}</div>
                    <div>gender: {currentHero.gender}</div>
                    <div>birth_year: {currentHero.birth_year}</div>
                    <div>height: {currentHero.height}</div>
                    <div>mass: {currentHero.mass}</div>
                    <div>hair_color: {currentHero.hair_color}</div>
                    <div>skin_color: {currentHero.skin_color}</div>
                    <div>hair_color: {currentHero.hair_color}</div>
                    <div>skin_color: {currentHero.skin_color}</div>
                </div>
            </div>

            {/*{currentHero && JSON.stringify(currentHero, null, 2)}*/}

            <div>
                <NavLink to={`/favorites`}>
                    <button>Go to favorites</button>
                </NavLink>
            </div>
        </div>
    } else {
        return <div>Hero is undefined</div>
    }

}

export default Card;
