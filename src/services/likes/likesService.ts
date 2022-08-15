import { LikesServiceInterface } from './likesService.interface'
import axios, { AxiosError } from 'axios'
import { apiException } from '../../utils/apiException'
import { ServerError } from '../../interfaces/api'
import axiosInstance from '../axiosInstance'

class LikesService implements LikesServiceInterface {

  public async likeComment(commentId: number) {
    try {
      const response = await axiosInstance.post('/likes/like', { commentId })
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }

  public async unlikeComment(likeId: number) {
    try {
      const response = await axiosInstance.delete(`/likes/like/${likeId}`)
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }
}


export default LikesService