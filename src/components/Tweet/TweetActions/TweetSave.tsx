import React from 'react'
import TweetAction from './TweetAction'
import { BsBookmark } from 'react-icons/bs'
import useUpdateData from '../../../hooks/useUpdateData'
import apiService from '../../../services/api/apiService'
import { SavedTweetTypes } from '../../../interfaces/saveTweet'
import { toast } from 'react-toastify'

interface Props {
  tweetId: number
  savedTweets: SavedTweetTypes[]
}

const TweetSave = ({ tweetId, savedTweets = [] }:Props) => {
  const isSaved = savedTweets.length === 1
  const { mutate: saveTweet } = useUpdateData({ key: ['tweets', 'bookmarks'], mutationFn: isSaved ? apiService.unSaveTweet : apiService.saveTweet })
  const resourceId = isSaved ? savedTweets[0].id : tweetId

  return (
    <TweetAction text={isSaved ? 'Saved' : 'Save'} textColor={isSaved ? 'text-light-blue' : 'text-primary-text'} onClickHandler={() => saveTweet(resourceId, {
      onSuccess: () => {
        if (isSaved) {
          toast.success('Tweet has been removed from your bookmarks')
        }
      },
    })}>
      <BsBookmark size={20} className={`text-primary-text ${isSaved ? 'text-light-blue' : 'text-primary-text'}`} />
    </TweetAction>
  )
}

export default TweetSave
