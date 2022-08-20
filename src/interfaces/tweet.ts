import { CommentLikeCountTypes, CommentLikeTypes, TweetLikeTypes } from './likes'
import { SavedTweetCountTypes, SaveTweetTypes } from './saveTweet'

export interface CreateTweetTypes {
  description: string;
  isPublic: boolean;
}

export interface TweetTypes {
  id: number
  createdAt: string
  description: string
  isPublic: boolean
  likes: TweetLikeTypes[]
  saveTweet: SaveTweetTypes[]
  user: {
    firstname: string
    lastname: string
  }
  comments: TweetCommentTypes[]
  _count: SavedTweetCountTypes
}

export interface TweetCommentTypes {
  id: number
  createdAt: string
  description: string
  user: {
    firstname: string
    lastname: string
  }
  _count: CommentLikeCountTypes
  likes: CommentLikeTypes[]
}

export interface CreateTweetCommentTypes {
  tweetId: number
  comment: string
}
