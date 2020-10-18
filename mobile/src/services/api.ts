import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3333',  RODAR NO COMPUTADOR
    baseURL: 'http://192.168.15.6:3333' //RODAR NO CELULAR
});

export default api;