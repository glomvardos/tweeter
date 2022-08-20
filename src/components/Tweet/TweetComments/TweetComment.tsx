import { useState } from 'react'
import { TweetCommentTypes } from '../../../interfaces/tweet'
import UserIcon from '../../UI/UserIcon'
import stringMethods from '../../../utils/stringMethods'
import moment from 'moment'
import RenderIf from '../../UI/RenderIf'
import useWidth from '../../../hooks/useWidth'
import TweetCommentLike from './TweetCommentLike'

interface Props {
  comment: TweetCommentTypes
}

const TweetComment = ({ comment }:Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const { width } = useWidth()
  const textMaxLength = width! < 640 ? 140 : width! < 1024 ? 250 : 350

  const handleExpand = () => setIsExpanded(prevState => !prevState)

  return (
    <div className='flex gap-4'>
      <div className='min-w-[48px]'>
        <UserIcon width='w-12'/>
      </div>

      <div className='w-full flex flex-col gap-2'>
        <div className='bg-black shadow-md rounded-lg w-full px-[15px] py-[10px]'>
          <div className='flex flex-col items-start gap-1 md:flex-row md:items-end md:gap-2 mb-[8px]'>
            <p className='text-sm font-medium text-white'>
              {stringMethods.capitalize(comment.user.firstname)} {stringMethods.capitalize(comment.user.lastname)}
            </p>
            <p className='text-xs text-[#BDBDBD] font-medium'>{moment(comment.createdAt).format('DD MMMM yyyy - HH:mm')}</p>
          </div>
          <RenderIf isTrue={comment.description.length <= textMaxLength || isExpanded }>
            <p className='text-primary-text whitespace-pre-line'>{comment.description}</p>
          </RenderIf>

          <RenderIf isTrue={comment.description.length > textMaxLength && !isExpanded }>
            <p className='text-primary-text whitespace-pre-line'>{comment.description.substring(0, textMaxLength)}...{' '}
              <button
                className='text-primary-blue'
                onClick={handleExpand}>
                Show more
              </button>
            </p>
          </RenderIf>
        </div>
        <TweetCommentLike commentId={comment.id} likes={comment.likes} totalLikes={comment._count.likes}/>
      </div>
    </div>
  )
}

export default TweetComment
