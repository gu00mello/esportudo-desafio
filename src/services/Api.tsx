import env from 'react-native-dotenv';
import axios from 'axios';

const RAPIDAPI = axios.create({
    baseURL: env.API_URL,
    headers: {
        'x-rapidapi-key': env.API_KEY,
        'x-rapidapi-host': env.API_HOST
    }
});

export default RAPIDAPI;
