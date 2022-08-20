import { AxiosResponse } from 'axios'

export interface SaveTweetsInterface {
  saveTweet(tweetId: number): Promise<AxiosResponse | undefined>
}