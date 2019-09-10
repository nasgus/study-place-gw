import axios from 'axios'

export default {
  async registration (body) {
    try {
      return await axios.post('/registration', body)
    } catch (e) {
      return e
    }
  }
}
