import { TweetTypes } from '../../interfaces/tweet'
import UserIcon from '../UI/UserIcon'
import TweetUserDetails from './TweetUserDetails'
import Divider from '../UI/Divider'
import TweetActions from './TweetActions'
import TweetActionsCount from './TweetActionsCount'
import TweetDescription from './TweetDescription'
import placeholder from '../../assets/images/placeholder.png'

interface Props {
  tweet: TweetTypes
}

const Tweet = ({ tweet }:Props) => {

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
      <TweetActions/>
      <Divider/>
    </div>
  )
}

export default Tweet
