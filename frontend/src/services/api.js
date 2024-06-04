import axios from 'axios'

const api = axios.create({
  //local que está o backend
  baseURL: 'http://localhost:3001',
})

export  default api