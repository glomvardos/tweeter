import { SaveTweetsInterface } from './saveTweets.interface'
import { apiException } from '../../utils/apiException'
import axios, { AxiosError } from 'axios'
import { ServerError } from '../../interfaces/api'
import axiosInstance from '../axiosInstance'

class SaveTweetsService implements SaveTweetsInterface {
  public async getSavedTweets() {
    try {
      const response = await axiosInstance.get('/saved-tweets/save-tweet')
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }

  public async saveTweet(tweetId: number) {
    try {
      const response = await axiosInstance.post('/saved-tweets/save-tweet', { tweetId })
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }

  public async unSaveTweet(savedTweetId: number) {
    try {
      const response = await axiosInstance.delete(`/saved-tweets/save-tweet/${savedTweetId}`)
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }
}


export default SaveTweetsService
