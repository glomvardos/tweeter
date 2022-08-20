import { useState, useMemo }    from 'react'
import { TweetTypes } from '../../interfaces/tweet'
import UserIcon from '../../components/UI/UserIcon'
import TweetUserDetails from '../../components/Tweet/TweetUserDetails'
import Divider from '../../components/UI/Divider'
import TweetActions from '../../components/Tweet/TweetActions/TweetActions'
import TweetActionsCount from '../../components/Tweet/TweetActions/TweetActionsCount'
import TweetDescription from '../../components/Tweet/TweetDescription'
import placeholder from '../../assets/images/placeholder.png'
import TweetComments from '../../components/Tweet/TweetComments/TweetComments'

interface Props {
  tweet: TweetTypes
}

const Tweet = ({ tweet }:Props) => {
  const [showComments, setShowComments] = useState<boolean>(false)
  useMemo(() => tweet.comments.sort((a, b) => b.createdAt.localeCompare(a.createdAt)), [tweet])

  return (
    <div className='bg-dark-gray rounded-xl shadow-md p-5'>
      <div className='flex'>
        <UserIcon width='w-12'/>
        <TweetUserDetails firstname={tweet.user.firstname} lastname={tweet.user.lastname}
          createdAt={tweet.createdAt}/>
      </div>
      <TweetDescription description={tweet.description} />
      <div className='w-full h-full'>
        <img src={placeholder} className='rounded-xl w-full aspect-[4/3]  md:aspect-[2/1]' alt=''/>
      </div>
      <TweetActionsCount commentsCount={tweet.comments.length}/>
      <Divider/>
      <TweetActions setShowComments={setShowComments} likes={tweet.likes} tweetId={tweet.id} />
      <Divider/>
      <TweetComments comments={tweet.comments} showComments={showComments} tweetId={tweet.id}/>
    </div>
  )
}

export default Tweet
