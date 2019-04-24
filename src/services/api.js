import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-backend-stacherfox.herokuapp.com'
})

export default api;