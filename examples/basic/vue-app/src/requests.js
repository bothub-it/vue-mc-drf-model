import axios from 'axios';


const request = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const getPeopleOptions = () => request.options(
  'people/',
);

export const foo = 'foo';
