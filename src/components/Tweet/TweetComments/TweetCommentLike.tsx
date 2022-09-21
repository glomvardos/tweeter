import { AiOutlineHeart } from 'react-icons/ai'
import useUpdateData from '../../../hooks/useUpdateData'
import apiService from '../../../services/api/apiService'
import { TweetCommentTypes } from '../../../interfaces/tweet'

interface Props {
  commentId: number
  likes: TweetCommentTypes['likes']
  totalLikes: TweetCommentTypes['_count']['likes']
}

const TweetCommentLike = ({ commentId, likes, totalLikes }:Props) => {
  const isLiked =  likes.length === 1
  const { mutate: likeOrUnlikeComment } = useUpdateData({ key: ['tweets', 'bookmarks', 'myTweets'], mutationFn: isLiked ? apiService.unlikeComment : apiService.likeComment })
  const resourceId = isLiked ? likes[0].id : commentId

  return (
    <div className='flex items-center text-[#BDBDBD] text-sm font-semibold gap-2'>
      <AiOutlineHeart size={18} className={`${isLiked ? 'text-error' : 'text-[#BDBDBD]'} cursor-pointer`} onClick={() => likeOrUnlikeComment(resourceId)} />
      <p>·</p>
      <p>{totalLikes} {totalLikes === 1 ? 'Like' : 'Likes'}</p>
    </div>
  )
}

export default TweetCommentLike
