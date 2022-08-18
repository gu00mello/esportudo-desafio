import { API_URL, API_KEY, API_HOST } from '@env';
import axios from 'axios';

const RAPIDAPI = axios.create({
    baseURL: API_URL,
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
    }
});

export default RAPIDAPI;
