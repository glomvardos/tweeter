import { CreateTweetCommentTypes } from '../../interfaces/tweet'
import { AxiosResponse } from 'axios'

export interface CommentsServiceInterface {
  createTweetComment({ tweetId, comment }:CreateTweetCommentTypes): Promise<AxiosResponse | undefined>;
}