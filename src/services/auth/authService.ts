import axios, { AxiosError } from 'axios'
import axiosInstance from '../axiosInstance'
import { LoginTypes, RegisterTypes } from '../../interfaces/auth'
import Exceptions from '../api/exceptions'
import { ServerError } from '../../interfaces/api'

class AuthService extends Exceptions {
  public async login({ email, password }: LoginTypes) {
    try {
      return await axiosInstance.post('/auth/login', {
        email,
        password,
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.unauthorized(error as AxiosError<ServerError>)
      }
    }
  }

  public async register({ firstname, lastname, email, password }: RegisterTypes) {
    try {
      return await axiosInstance.post('/auth/register', {
        firstname,
        lastname,
        email,
        password,
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.forbidden(error as AxiosError<ServerError>)
      }
    }
  }
}

export default AuthService
