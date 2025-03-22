import axios from 'axios';

const BASE_URL = 'https://666b-132-157-130-242.ngrok-free.app';

const api=axios.create({
    baseURL:BASE_URL,
});

export default api;
