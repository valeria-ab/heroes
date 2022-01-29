import React from 'react';
import s from './Pagination.module.scss'


type PropsType = {
    heroesTotalCount: number
    onPageChanged: (page: number) => void
    page: number
    pagePortion: number
    setPortion: (pagePortion: number) => void
}

type StateType = {
    portion: number
    leftNumber: number
    rightNumber: number
}

export class Pagination extends React.Component<PropsType, StateType> {


    render() {

        let pagesCount = Math.ceil((this.props.heroesTotalCount) / 10);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        const portionSize = 5;
        const portionCount = Math.ceil(pagesCount / portionSize)

        const leftNumber = (this.props.pagePortion - 1) * portionSize + 1
        const rightNumber = this.props.pagePortion * portionSize


        return (
            <div className={s.pagination}>
                {this.props.pagePortion > 1 &&
                    <>
                        <span className={s.btnLeft}
                            onClick={() => {
                            this.props.onPageChanged(1)
                            this.props.setPortion(this.props.pagePortion - 1)
                        }}>&lt;</span>
                    </>}

                {pages
                    .filter((p) => p ? p >= leftNumber && p <= rightNumber : '')
                    .map(q => {
                        return <div
                            key={q}
                            className={`${s.item} ${this.props.page === q ? s.select : ''}`}

                            onClick={() => {
                                this.props.onPageChanged(q)
                            }}>
                            {q}
                        </div>
                    })}

                {portionCount > this.props.pagePortion &&
                    <span className={s.btnRight}
                            onClick={() => {
                                this.props.setPortion(this.props.pagePortion + 1)
                                this.props.onPageChanged(6)
                            }}>&gt;</span>}
            </div>
        )
    }
}


