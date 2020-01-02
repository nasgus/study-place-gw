import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

export default {
  async get (endpoint) {
    try {
      return await axios.get(endpoint)
    } catch (e) {
      console.log(endpoint);
      return e
    }
  },
  async post (endpoint, data) {
    try {
      return await axios.post(endpoint, data)
    } catch (e) {
      console.log(endpoint);
      return e
    }
  }
}
