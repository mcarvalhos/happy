// configuração de como o Front-end se conecta com o Backend

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api;