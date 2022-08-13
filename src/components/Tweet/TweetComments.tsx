import { TweetCommentsTypes } from '../../interfaces/tweet'
import TweetCommentForm from './TweetCommentForm'
import Divider from '../UI/Divider'
import UserIcon from '../UI/UserIcon'

interface Props {
  showComments: boolean
  comments?: TweetCommentsTypes[]
  tweetId: number
}

const TweetComments = ({ comments, showComments, tweetId }:Props) => {
  const showCommentsClasses = showComments ? 'max-h-[500px]' : 'max-h-0 overflow-y-hidden'
  return (
    <div className={`mt-[10px] ${showCommentsClasses} transition-all duration-300 `}>
      <div className='flex w-full gap-4 mb-[10px]'>
        <UserIcon width='w-12'/>
        <TweetCommentForm tweetId={tweetId} />
      </div>
      <Divider />
    </div>
  )
}

export default TweetComments
