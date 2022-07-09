import AuthService from '../auth/authService'
import Exceptions from './exceptions'

const applyMixins = (derivedCtor: any, baseCtors: any[]) => {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (name !== 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name]
      }
    })
  })
}

class ApiService {}

interface ApiService extends AuthService {}

applyMixins(ApiService, [AuthService, Exceptions])

export default new ApiService()
