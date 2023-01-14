import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  headers: {
    Authorization: 'Bearer ' + import.meta.env.VITE_TEST_TOKEN,
  },
});

export default instance;
