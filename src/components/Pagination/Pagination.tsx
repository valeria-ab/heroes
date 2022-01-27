import React, {useState} from 'react';
import s from './Paginations.module.css'
import {api} from '../../api/api';


type PropsType = {
    heroesTotalCount: number
    onPageChanged: (page: number) => void
    page: number
    setPage: (page: number) => void
}

export const Pagination: React.FC<PropsType> = (props) => {

    let isLoading = false

    const currentPageHandler = (page:number) => {
        isLoading= true
      api.getNextPage(page).then()
            isLoading= false

    }

    let pagesCount = Math.ceil((props.heroesTotalCount) / 10);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionSize = 5;
    const portionCount = Math.ceil(pagesCount / portionSize)

    const [portion, setPortion] = useState(1)
    const leftNumber = (portion - 1) * portionSize + 1
    const rightNumber = portion * portionSize


    if (isLoading) return <div>Loading...</div>

    return (
        <div className={s.pagination}>

            {portion > 1 &&
                <>
                    <button onClick={() => {
                       currentPageHandler((portionSize * (portion - 2)) + 1)
                        setPortion(portion - 1)
                    }}>&lt;</button>
                </>}

            {pages
                .filter((p) => p ? p >= leftNumber && p <= rightNumber : '')
                .map(q => {
                    return <div
                        key={q}
                        className={`${s.item} ${props.page === q ? s.select : ''}`}

                        onClick={() => {
                            props.onPageChanged(q)
                            props.setPage(q)
                        }}>
                        {q}
                    </div>
                })}

            {portionCount > portion &&
                <button disabled={portion===portionCount}
                        className={s.btnRight}
                        onClick={() => {
                    setPortion(portion + 1)
                    currentPageHandler(portionSize * portion + 1)
                }}>&gt;</button>}

        </div>
    )
}

