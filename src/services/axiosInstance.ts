import axios from 'axios'
import tokenService from './token/tokenService'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333/api',
})

axiosInstance.interceptors.request.use(
  request => {
    if (!request.url?.includes('login') && !request.url?.includes('register')) {
      const token = tokenService.getAccessToken()
      if (token && request.headers) request.headers.Authorization = `Bearer ${token}`
    }
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosInstance
