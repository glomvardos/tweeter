import { Dispatch, SetStateAction } from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { BsArrowCounterclockwise, BsBookmark } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import TweetAction from './TweetAction'

interface Props {
  setShowComments: Dispatch<SetStateAction<boolean>>
}

const TweetActions = ({ setShowComments }:Props) => {
  return (
    <div className='py-1 flex justify-around items-center w-full'>
      <TweetAction text='Comment' onClickHandler={() => setShowComments(prevState => !prevState)}>
        <FiMessageSquare size={20} color='#4F4F4F' />
      </TweetAction>

      <TweetAction text='Retweet' onClickHandler={() => {}}>
        <BsArrowCounterclockwise size={20} color='#4F4F4F'/>
      </TweetAction>

      <TweetAction text='Like' onClickHandler={() => {}}>
        <AiOutlineHeart size={20} color='#4F4F4F'/>
      </TweetAction>

      <TweetAction text='Save' onClickHandler={() => {}}>
        <BsBookmark size={20} color='#4F4F4F'/>
      </TweetAction>
    </div>
  )
}

export default TweetActions
