const axios = require("axios");

axios.defaults.params = {
  format: "json",
  nojsoncallback: 1,
};

axios.defaults.baseURL = process.env.API_ENDPOINT;

module.exports = axios;
