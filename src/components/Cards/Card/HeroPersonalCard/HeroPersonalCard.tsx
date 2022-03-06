import {HeroType} from '../../../../App';
import {useParams} from 'react-router-dom';
import s from './HeroPersonalCard.module.scss';
import React from 'react';

type HeroPersonalCardProps = {
    heroes: HeroType[]
    favorites: HeroType[]
}

export const HeroPersonalCard = (props: HeroPersonalCardProps) => {

    const heroesForHeroPersonalCard =  [...props.heroes, ...props.favorites]
    const {nameHero} = useParams()
    const currentHero = heroesForHeroPersonalCard.find(
        (hero) => hero.name === nameHero
    )


    if (currentHero) {
        return (
            <div className={s.heroPersonalCard}>
                <div className={s.heroName}>{currentHero.name}</div>
                <div className={s.cardDetails}>
                    <div className={s.photo}>
                        <div>photo</div>
                    </div>
                    <div className={s.description}>
                        <div><span className={s.keyWords}>gender: </span>{currentHero.gender}</div>
                        <div><span className={s.keyWords}>birth year: </span>{currentHero.birth_year}</div>
                        <div><span className={s.keyWords}>height: </span>{currentHero.height}</div>
                        <div><span className={s.keyWords}>mass: </span>{currentHero.mass}</div>
                        <div><span className={s.keyWords}>hair color: </span>{currentHero.hair_color}</div>
                        <div><span className={s.keyWords}>skin color: </span>{currentHero.skin_color}</div>
                    </div>
                </div>
            </div>)
    } else {
        return <div className={s.message}>Hero is undefined</div>
    }

}
