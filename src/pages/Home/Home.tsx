import CreateTweet from './components/CreateTweet/CreateTweet'
import useGetData from '../../hooks/useGetData'
import { TweetTypes } from '../../interfaces/tweet'
import apiService from '../../services/api/apiService'
import Tweets from '../../containers/Tweets/Tweets'
import WhoToFollow from './components/WhoToFollow/WhoToFollow'


const Home = () => {
  const { data: tweets } = useGetData<TweetTypes[]>({ queryKey: 'tweets', queryFn: apiService.getTweets })

  return (
    <div className='flex gap-6'>
      <div className='w-full'>
        <CreateTweet />
        <Tweets tweets={tweets} />
      </div>
      <WhoToFollow/>
    </div>
  )
}

export default Home

