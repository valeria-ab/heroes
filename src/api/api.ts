import axios, {AxiosResponse} from 'axios';
import {ResponseType} from '../App';
import {PlanetResponseType, VehicleResponseType} from '../components/Cards/Card/Card';


const instance = axios.create({
  baseURL: "https://swapi.dev/api",
});


export const api = {
  getHeroes() {
    return instance
        .get<ResponseType, AxiosResponse<ResponseType>>(`/people`)
        .then(res => res.data)
  },
  getNextPage(page:number) {
    return instance
        .get(`/people/?page=${page}`)
        .then(res => res.data.results)
  },
  getPlanet(planetNumber:string) {
    return instance
        .get<PlanetResponseType, AxiosResponse<PlanetResponseType>>(`/planets/${planetNumber}`)
        .then(res => res.data.name)
  },
  getVehicle(vehicleNumber:string) {
    return instance
        .get<PlanetResponseType, AxiosResponse<VehicleResponseType>>(`/vehicles/${vehicleNumber}`)
        .then(res => res.data.name)
  }
}
