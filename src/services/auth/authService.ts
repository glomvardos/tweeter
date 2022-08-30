import axios, { AxiosError } from 'axios'
import axiosInstance from '../axiosInstance'
import { LoginTypes, RegisterTypes } from '../../interfaces/auth'
import { ServerError } from '../../interfaces/api'
import { AuthServiceInterface } from './authService.interface'
import { apiException } from '../../utils/apiException'
import tokenMethods from '../../utils/token/tokenMethods'

class AuthService implements AuthServiceInterface {
  public async login({ email, password }: LoginTypes) {
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      })
      tokenMethods.saveToken({ token: response.data })
      const authUser = await this.getAuthUser()
      return authUser
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }

  public async register({
    firstname,
    lastname,
    email,
    password,
  }: RegisterTypes) {
    try {
      const response = await axiosInstance.post('/auth/register', {
        firstname,
        lastname,
        email,
        password,
      })
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }

  public async getAuthUser() {
    try {
      const response = await axiosInstance.get('/users/authenticated-user')
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }
}

export default AuthService
