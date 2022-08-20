import axios, { AxiosError } from 'axios'
import { apiException } from '../../utils/apiException'
import { ServerError } from '../../interfaces/api'
import axiosInstance from '../axiosInstance'
import { LikesServiceInterface } from './likesService.interface'

class LikesService implements LikesServiceInterface {

  public async likeComment(commentId: number) {
    try {
      const response = await axiosInstance.post('/likes/like/comment', { commentId })
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }

  public async unlikeComment(likeId: number) {
    try {
      const response = await axiosInstance.delete(`/likes/like/${likeId}/comment`)
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }

  public async likeTweet(tweetId: number) {
    try {
      const response = await axiosInstance.post('/likes/like/tweet', { tweetId })
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }

  public async unlikeTweet(likeId: number) {
    try {
      const response = await axiosInstance.delete(`/likes/like/${likeId}/tweet`)
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }
}


export default LikesService