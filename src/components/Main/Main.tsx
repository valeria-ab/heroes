import {Header} from '../Header/Header';
import {App} from '../../App';
import {Component} from 'react';

export class Main extends Component {
    render() {
        return <div>
            <Header/>
            <App/>
        </div>
    }
}