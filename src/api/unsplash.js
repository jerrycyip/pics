import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
      }
});