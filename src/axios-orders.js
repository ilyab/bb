import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d8c73.firebaseio.com/'
});

export default instance;