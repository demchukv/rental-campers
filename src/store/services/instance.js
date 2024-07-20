import axios from 'axios';

//const API_URI = 'https://6697522102f3150fb66d384a.mockapi.io/api/v1/';
// const API_URI = 'https://rental-campers-api.onrender.com/api/';
const API_URI = 'http://localhost:8080/api/';

const headerConfig = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const instance = axios.create({ ...headerConfig, baseURL: API_URI });
