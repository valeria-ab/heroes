import React from 'react';


type PropsType = {
    sortByName: () => void
}

export class Sorting extends React.Component<PropsType> {

    render() {

        return <div>
            <button onClick={() => this.props.sortByName()}>sort by name</button>
        </div>
    }
}