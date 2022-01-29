import React from 'react';
import s from './Sorting.module.scss';

type PropsType = {
    sortByName: () => void
}

export class Sorting extends React.Component<PropsType> {

    render() {

        return <div className={s.sorting}>
            <span className={s.sortByName} onClick={() => this.props.sortByName()}>sort by name</span>
        </div>
    }
}