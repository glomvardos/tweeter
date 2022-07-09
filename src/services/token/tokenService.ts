import { TokenServiceTypes } from '../../interfaces/token'

class TokenService {
  saveToken({ token }: TokenServiceTypes) {
    localStorage.setItem('accessToken', token.access)
  }

  removeToken() {
    localStorage.removeItem('accessToken')
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('accessToken')
    return accessToken
  }
}

export default new TokenService()
