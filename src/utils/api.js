import axios from "axios";

const API_KEY = "c4b4cf0d1a560593f9339800a41e4f81";

export const fetchWeatherByCity = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
};

export const fetchWeatherByCityForWeek = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
};

export const fetchInputData = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${API_KEY}`
  );
};

