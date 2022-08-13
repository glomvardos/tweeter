import { UserTypes } from './user'

export interface CreateTweetTypes {
  description: string;
  isPublic: boolean;
}

export interface TweetTypes {
  id: number
  createdAt: string
  description: string
  isPublic: boolean
  user: {
    firstname: string
    lastname: string
  }
  comments: TweetCommentsTypes[]
}

export interface TweetCommentsTypes {
  id: number
  createdAt: string
  updatedAt: string
  description: string
  tweetId: number
  tweet: TweetTypes
  userId: number
  user: UserTypes
}

export interface CreateTweetCommentTypes {
  tweetId: number
  comment: string
}
