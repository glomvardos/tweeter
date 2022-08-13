import { useState }    from 'react'
import { TweetTypes } from '../../interfaces/tweet'
import UserIcon from '../../components/UI/UserIcon'
import TweetUserDetails from '../../components/Tweet/TweetUserDetails'
import Divider from '../../components/UI/Divider'
import TweetActions from '../../components/Tweet/TweetActions'
import TweetActionsCount from '../../components/Tweet/TweetActionsCount'
import TweetDescription from '../../components/Tweet/TweetDescription'
import placeholder from '../../assets/images/placeholder.png'
import TweetComments from '../../components/Tweet/TweetComments'

interface Props {
  tweet: TweetTypes
}

const Tweet = ({ tweet }:Props) => {
  const [showComments, setShowComments] = useState<boolean>(false)

  return (
    <div className='bg-white rounded-xl shadow-sm p-5'>
      <div className='flex'>
        <UserIcon width='w-10'/>
        <TweetUserDetails firstname={tweet.user.firstname} lastname={tweet.user.lastname}
          createdAt={tweet.createdAt}/>
      </div>
      <TweetDescription description={tweet.description} />
      <div className='w-full h-full'>
        <img src={placeholder} className='rounded-xl w-full aspect-[4/3]  md:aspect-[2/1]' alt=''/>
      </div>
      <TweetActionsCount/>
      <Divider/>
      <TweetActions setShowComments={setShowComments}/>
      <Divider/>

      <TweetComments showComments={showComments} tweetId={tweet.id}/>
    </div>
  )
}

export default Tweet
