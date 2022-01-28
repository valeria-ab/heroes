import axios, {AxiosResponse} from 'axios';
import {ResponseType} from '../App';


const instance = axios.create({
    baseURL: 'https://swapi.dev/api',
});


export const api = {
    getHeroes() {
        return instance
            .get<ResponseType, AxiosResponse<ResponseType>>(`/people`)
            .then(res => res.data)
    },
    getNextPage(page: number) {
        return instance
            .get(`/people/?page=${page}`)
            .then(res => res.data.results)
    },
}
