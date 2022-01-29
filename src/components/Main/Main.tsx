import {Header} from '../Header/Header';
import {App} from '../../App';
import {Component} from 'react';
import s from './Main.module.scss'

export class Main extends Component {
    render() {
        return <div className={s.main}>
            <Header/>
            <App/>
        </div>
    }
}