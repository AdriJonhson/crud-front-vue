import axios from 'axios';

export const http = axios.create({
    baseURL:'http://crud-lumen-api.test/'
});