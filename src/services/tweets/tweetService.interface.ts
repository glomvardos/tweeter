import { CreateTweetCommentTypes, CreateTweetTypes } from '../../interfaces/tweet'
import { AxiosResponse } from 'axios'

export interface TweetServiceInterface {
  createTweet({ description, isPublic }:CreateTweetTypes): Promise<AxiosResponse | undefined>;
  getTweets(): Promise<AxiosResponse | undefined>;
  createTweetComment({ tweetId, comment }:CreateTweetCommentTypes): Promise<AxiosResponse | undefined>;
}