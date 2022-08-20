import { TweetCommentTypes } from '../../../interfaces/tweet'
import TweetCommentForm from './TweetCommentForm'
import Divider from '../../UI/Divider'
import UserIcon from '../../UI/UserIcon'
import TweetComment from './TweetComment'

interface Props {
  comments: TweetCommentTypes[]
  showComments: boolean
  tweetId: number
}

const TweetComments = ({ comments = [], showComments, tweetId }:Props) => {
  const displayComments = comments.map(comment => <TweetComment key={comment.id} comment={comment} />)

  const showCommentsClasses = showComments ? 'h-max' : 'h-0 overflow-y-hidden'
  return (
    <div className={`mt-[10px] ${showCommentsClasses}`}>
      <div className='flex w-full gap-4 mb-[10px]'>
        <div className='min-w-[48px]'>
          <UserIcon width='w-12'/>
        </div>
        <TweetCommentForm tweetId={tweetId} />
      </div>
      <Divider />
      <div className='mt-5 flex flex-col gap-5'>
        {displayComments}
      </div>
    </div>
  )
}

export default TweetComments
