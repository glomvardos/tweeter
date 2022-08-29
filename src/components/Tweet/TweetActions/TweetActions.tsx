import { Dispatch, SetStateAction } from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { BsArrowCounterclockwise, BsBookmark } from 'react-icons/bs'
import TweetAction from './TweetAction'
import { TweetLikeTypes } from '../../../interfaces/likes'
import TweetLike from './TweetLike'
import TweetSave from './TweetSave'
import { SavedTweetTypes } from '../../../interfaces/saveTweet'

interface Props {
  setShowComments: Dispatch<SetStateAction<boolean>>
  likes: TweetLikeTypes[]
  savedTweets: SavedTweetTypes[]
  tweetId: number
}

const TweetActions = ({ setShowComments, likes = [], savedTweets = [], tweetId }:Props) => {

  return (
    <div className='py-1 flex justify-around items-center w-full'>
      <TweetAction text='Comment' onClickHandler={() => setShowComments(prevState => !prevState)}>
        <FiMessageSquare size={20} className='text-primary-text' />
      </TweetAction>

      <TweetAction text='Retweet' onClickHandler={() => {}}>
        <BsArrowCounterclockwise size={20} className='text-primary-text' />
      </TweetAction>

      <TweetLike likes={likes} tweetId={tweetId}/>

      <TweetSave savedTweets={savedTweets}  tweetId={tweetId} />
    </div>
  )
}

export default TweetActions
