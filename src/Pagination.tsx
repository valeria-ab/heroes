import React, {useState} from 'react';
import s from './Paginations.module.css'
import {api} from './api/api';


export const Pagination: React.FC<PropsType> = (props) => {
    let isLoading = false

    const currentPageHandler = (page:number) => {
        isLoading= true
      api.getNextPage(page).then()
            isLoading= false

    }

    let pagesCount = Math.ceil((+props.heroesTotalCount) / 10);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionSize = 5; // по 5 страниц показывать до точек
    const portionCount = Math.ceil(pagesCount / portionSize) // сколько всего pagination кнопок

    const [portion, setPortion] = useState(1)
    const leftNumber = (portion - 1) * portionSize + 1
    const rightNumber = portion * portionSize

    const onFirstPageClick = () => {
        currentPageHandler(1)
        setPortion(1)
    }

    const onLastPageClick = () => {
      currentPageHandler(pagesCount)
        setPortion(portionCount)
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div className={s.pagination}>
            {
                portion === 1 && <button disabled>&lt;</button>
            }
            {portion > 1 &&
                <>
                    <button onClick={() => {
                       currentPageHandler((portionSize * (portion - 2)) + 1)
                        setPortion(portion - 1)
                    }}>&lt;</button>
                    <div className={s.item} onClick={onFirstPageClick}>1</div>
                    {/*first page click*/}
                    <div className={s.points}>...</div>
                </>}

            {pages
                .filter((p) => p ? p >= leftNumber && p <= rightNumber : '')
                .map(q => {
                    return <div
                        key={q}
                        // className={`${s.item} ${props.page === q ? s.select : ''}`}

                        onClick={() => {
                            props.onPageChanged(q)
                        }}>
                        {q}
                    </div>
                })}
            {portion !== portionCount &&
                <>
                    <div className={s.points}>...</div>
                    <div className={s.item} onClick={onLastPageClick}>{pagesCount}</div>
                    {/*last page click*/}
                </>
            }
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

type PropsType = {
    heroesTotalCount: number
    onPageChanged: (page: number) => void

    // page: number

}