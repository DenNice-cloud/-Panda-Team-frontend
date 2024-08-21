import axios from "axios";

const API_KEY = "c4b4cf0d1a560593f9339800a41e4f81";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeatherByCity = (city) => {
  return axios.get(
    `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
  );
};

export const fetchWeatherByCityForWeek = (city) => {
  return axios.get(
    `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
};

export const fetchInputData = (city) => {
  return axios.get(`${BASE_URL}find?q=${city}&appid=${API_KEY}`);
};
