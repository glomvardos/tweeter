import useUpdateData from '../../../hooks/useUpdateData'
import apiService from '../../../services/api/apiService'
import TweetAction from './TweetAction'
import { AiOutlineHeart } from 'react-icons/ai'
import { TweetLikeTypes } from '../../../interfaces/likes'

interface Props {
  likes: TweetLikeTypes[]
  tweetId: number
}

const TweetLike = ({ likes = [], tweetId }:Props) => {
  const isLiked =  likes.length === 1
  const { mutate: likeOrUnlikeTweet } = useUpdateData({ key:'tweets', mutationFn: isLiked ? apiService.unlikeTweet : apiService.likeTweet })
  const resourceId = isLiked ? likes[0].id : tweetId

  return (
    <TweetAction text={isLiked ? 'Liked' : 'Like'} textColor={isLiked ? 'text-error' : 'text-primary-text'}  onClickHandler={() => likeOrUnlikeTweet(resourceId)}>
      <AiOutlineHeart size={20}  className={isLiked ? 'text-error' : 'text-primary-text'} />
    </TweetAction>
  )
}

export default TweetLike
