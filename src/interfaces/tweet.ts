import { CommentLikeTypes } from './likes'

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
  comments: TweetCommentTypes[]
}

export interface TweetCommentTypes {
  id: number
  createdAt: string
  description: string
  user: {
    firstname: string
    lastname: string
  }
  likes: CommentLikeTypes[]
}

export interface CreateTweetCommentTypes {
  tweetId: number
  comment: string
}
