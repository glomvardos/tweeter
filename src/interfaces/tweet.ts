import { CommentLikeCountTypes, CommentLikeTypes, TweetLikeTypes } from './likes'
import { SavedTweetCountTypes, SavedTweetTypes } from './saveTweet'

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
  savedTweets: SavedTweetTypes[]
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
