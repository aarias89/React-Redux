import axios from 'axios';

const API_KEY = "594da4a5f67a0a1420a9264004d57971";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//As convention, make a single varaible that hold Action type.
export const FETCH_WEATHER = 'FETCH_WEATHER'

//action creators always have to return an Action, and every action
//has to have a type
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //axios will return a promise, and pass it to the function as the payload
  const request = axios.get(url);

  console.log(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
