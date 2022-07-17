import axios, { AxiosError } from 'axios'
import { CreateTweetTypes } from '../../interfaces/tweet'
import { apiException } from '../../utils/apiException'
import { ServerError } from '../../interfaces/api'
import axiosInstance from '../axiosInstance'

class TweetsService {
  public async createTweet({ description, isPublic }:CreateTweetTypes) {
    try {
      return await axiosInstance.post('/tweets/tweet', { description, isPublic })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }
}

export default TweetsService