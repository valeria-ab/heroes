import {HeroType} from '../../../App';
import {NavLink, useParams} from 'react-router-dom';
import s from './Card.module.css';
import React from 'react';

type HeroPersonalCardProps = {
    heroes: HeroType[]
}

export const HeroPersonalCard = (props: HeroPersonalCardProps) => {
//функциональная, потому что в react-router-dom 6м не поддерживается withRouter

    const {nameHero} = useParams()
    const currentHero = props.heroes.find(
        (hero) => hero.name === nameHero
    )


    if (currentHero) {
        return <div>
            <span>Hero Personal Card</span>

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