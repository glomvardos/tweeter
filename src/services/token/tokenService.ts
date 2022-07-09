import { TokenServiceTypes } from '../../interfaces/token'

class TokenService {
  public saveToken({ token }: TokenServiceTypes) {
    localStorage.setItem('accessToken', token.access)
  }

  public removeToken() {
    localStorage.removeItem('accessToken')
  }

  public getAccessToken() {
    const accessToken = localStorage.getItem('accessToken')
    return accessToken
  }
}

export default new TokenService()
