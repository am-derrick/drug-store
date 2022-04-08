import axios from 'axios';

// creates cloud function with base URL
const instance = axios.create({
    baseURL: 'http://localhost:5001/drug-store-9dcfb/us-central1/api' // Cloud function URL
});

export default instance;