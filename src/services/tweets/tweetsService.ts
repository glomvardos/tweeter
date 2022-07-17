import axios, { AxiosError } from 'axios'
import axiosInstance from '../axiosInstance'
import { apiException } from '../../utils/apiException'
import { CreateTweetTypes } from '../../interfaces/tweet'
import { ServerError } from '../../interfaces/api'
import { TweetServiceInterface } from './tweetService.interface'

class TweetsService implements TweetServiceInterface {
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