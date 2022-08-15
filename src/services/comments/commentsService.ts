import { CommentsServiceInterface } from './commentsService.interface'
import { CreateTweetCommentTypes } from '../../interfaces/tweet'
import axiosInstance from '../axiosInstance'
import axios, { AxiosError } from 'axios'
import { apiException } from '../../utils/apiException'
import { ServerError } from '../../interfaces/api'

class CommentsService implements CommentsServiceInterface {
  public async createTweetComment({ tweetId, comment }:CreateTweetCommentTypes) {
    try {
      const response = await axiosInstance.post('/comments/comment',
        {
          description:comment,
          tweetId,
        })
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        apiException(error as AxiosError<ServerError>)
      }
    }
  }
}

export default CommentsService