import { AxiosError } from 'axios'
import { HttpStatus } from '../../enums/HttpStatus'
import { ServerError } from '../../interfaces/api'

class Exceptions {
  static unauthorized(error: AxiosError<ServerError>) {
    if (error && error.response?.status === HttpStatus.UNAUTHORIZED) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error('Something went wrong')
    }
  }

  static forbidden(error: AxiosError<ServerError>) {
    if (error && error.response?.status === HttpStatus.FORBIDDEN) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error('Something went wrong')
    }
  }
}

export default Exceptions
