import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-burger-a6819.firebaseio.com/',
});

export default instance;
