import { AxiosResponse } from 'axios'

export interface SaveTweetsInterface {
  getSavedTweets(): Promise<AxiosResponse | undefined>;
  saveTweet(tweetId: number): Promise<AxiosResponse | undefined>
  unSaveTweet(savedTweetId: number): Promise<AxiosResponse | undefined>
}