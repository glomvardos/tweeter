import { SaveTweetsInterface } from './saveTweets.interface'
import { apiException } from '../../utils/apiException'
import axios, { AxiosError } from 'axios'
import { ServerError } from '../../interfaces/api'
import axiosInstance from '../axiosInstance'

class SaveTweetsService implements SaveTweetsInterface {
  public async saveTweet(tweetId: number) {
    try {
      const response = await axiosInstance.post('/save-tweets/save-tweet', { tweetId })
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }

}

export default SaveTweetsService
