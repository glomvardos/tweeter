import axios, { AxiosError } from 'axios'
import axiosInstance from '../axiosInstance'
import { LoginTypes, RegisterTypes } from '../../interfaces/auth'
import Exceptions from '../api/exceptions'
import { ServerError } from '../../interfaces/api'

class AuthApi extends Exceptions {
  async login({ email, password }: LoginTypes) {
    try {
      return await axiosInstance.post('/auth/login', {
        email,
        password,
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        AuthApi.unauthorized(error as AxiosError<ServerError>)
      }
    }
  }

  async register({ firstname, lastname, email, password }: RegisterTypes) {
    try {
      return await axiosInstance.post('/auth/register', {
        firstname,
        lastname,
        email,
        password,
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        AuthApi.forbidden(error as AxiosError<ServerError>)
      }
    }
  }
}

export default new AuthApi()
