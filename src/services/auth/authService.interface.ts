import { AxiosResponse } from 'axios'
import { LoginTypes, RegisterTypes } from '../../interfaces/auth'
import { UpdateUserTypes } from '../../interfaces/user'

export interface AuthServiceInterface {
  login({
    email,
    password,
  }: LoginTypes): Promise<AxiosResponse | undefined>;

  register({
    firstname,
    lastname,
    email,
    password,
  }: RegisterTypes): Promise<AxiosResponse | undefined>;

  getAuthUser(): Promise<AxiosResponse | undefined>;

  updateUser(values: UpdateUserTypes): Promise<AxiosResponse | undefined>;

  deleteUser(): Promise<AxiosResponse | undefined>;
}

