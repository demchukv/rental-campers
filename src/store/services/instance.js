import axios from 'axios';

const API_URI = 'https://6697522102f3150fb66d384a.mockapi.io/api/v1/';

const headerConfig = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const publicInstance = axios.create({
  ...headerConfig,
  baseURL: API_URI,
});

export const instance = axios.create({ ...headerConfig, baseURL: API_URI });
