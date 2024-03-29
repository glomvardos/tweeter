import { CreateTweetTypes } from '../../interfaces/tweet'
import { AxiosResponse } from 'axios'

export interface TweetServiceInterface {
  createTweet({ description, isPublic }:CreateTweetTypes): Promise<AxiosResponse | undefined>;
  getTweets(): Promise<AxiosResponse | undefined>;
  userTweets(): Promise<AxiosResponse | undefined>;
}