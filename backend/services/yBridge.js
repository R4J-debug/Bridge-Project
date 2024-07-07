const axios = require('axios');
const apiUrls = require('../constants/apiUrls');

exports.fetchRecommendedTokens = async () => {
    const response = await axios.get(apiUrls.recommendedTokens);
    return response.data;
};

exports.fetchQuote = async (params) => {
    const response = await axios.get(apiUrls.quote, { params });
    return response.data;
};

exports.fetchBuildTx = async (params) => {
    const response = await axios.get(apiUrls.buildTx, { params });
    return response.data;
};
