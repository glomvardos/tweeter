import { useMemo } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import useUpdateData from '../../hooks/useUpdateData'
import useCache from '../../hooks/useCache'
import apiService from '../../services/api/apiService'
import { TweetCommentTypes } from '../../interfaces/tweet'
import { UserTypes } from '../../interfaces/user'

interface Props {
  commentId: number
  likes:TweetCommentTypes['likes']
}

const TweetCommentLike = ({ commentId, likes }:Props) => {
  const { data: authUser } = useCache<UserTypes>('user')
  const like = useMemo(() => likes.find(user => user.userId === authUser?.id), [likes] )
  const { mutate: likeOrUnlikeComment } = useUpdateData({ key: 'tweets', mutationFn: like ? apiService.unlikeComment : apiService.likeComment })
  const resourceId = like ? like.id : commentId


  return (
    <div className='flex items-center text-[#BDBDBD] text-sm font-semibold gap-2'>
      <AiOutlineHeart size={18} className={`${like ? 'text-error' : 'text-[#BDBDBD]'} cursor-pointer`} onClick={() => likeOrUnlikeComment(resourceId)} />
      <p>·</p>
      <p>{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</p>
    </div>
  )
}

export default TweetCommentLike
