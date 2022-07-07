import { TokenServiceTypes } from '../../interfaces/token'

class TokenService {
  saveToken({ token }: TokenServiceTypes) {
    localStorage.setItem('accessToken', token.access)
    localStorage.setItem('refreshToken', token.refresh)
  }

  refreshAccessToken({ token }: TokenServiceTypes) {
    localStorage.setItem('accessToken', token.access)
  }

  removeToken() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('accessToken')
    return accessToken
  }

  getRefreshToken() {
    const refreshToken = localStorage.getItem('refreshToken')
    return refreshToken
  }
}

export default new TokenService()
