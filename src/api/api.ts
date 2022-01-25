import axios from "axios";


const instance = axios.create({
  baseURL: "https://swapi.dev/api",
});

export const api = {
  getHeroes() {
    return instance
        .get(`/people`)
        .then(res => res.data.results)
  }
}
