import React from 'react';
import s from './Card.module.scss'
import {NavLink} from 'react-router-dom';
import {HeroType} from '../../../App';


type PropsType = {
    hero: HeroType,
    addToOrRemoveFromFavorites: (hero: HeroType) => void
    addRemoveButtonName: string
};


export class Card extends React.Component<PropsType> {
    render() {
        return (
            <div className={s.card}>
                <NavLink to={`/hero/${this.props.hero.name}`}>
                    <div className={s.photo}>photo</div>
                </NavLink>
                <div className={s.name}>{this.props.hero.name}</div>

                <div>
                <span
                    className={this.props.addRemoveButtonName === 'remove from favorites'
                        ? s.removefromFavs
                        : s.addToFavs}
                    onClick={() => {

                        this.props.addToOrRemoveFromFavorites(this.props.hero)
                    }
                    }> {this.props.addRemoveButtonName}
                </span>
                </div>


            </div>

        );
    }
}

export default Card;
