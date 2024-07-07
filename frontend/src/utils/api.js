import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const fetchTokens = async () => {
    const response = await api.get('/tokens');
    return response.data;
};

export const fetchQuote = async (params) => {
    const response = await api.post('/quotes', params);
    return response.data;
};

export const fetchParams = async (params) => {
    const response = await api.post('/params', params);
    return response.data;
};
