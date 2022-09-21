import CoverImage from './components/UI/CoverImage'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import Tweets from '../../containers/Tweets/Tweets'
import useGetData from '../../hooks/useGetData'
import { TweetTypes } from '../../interfaces/tweet'
import apiService from '../../services/api/apiService'


const MyProfile = () => {
  const { data: tweets } = useGetData<TweetTypes[]>({ queryKey: 'myTweets', queryFn: apiService.userTweets })
  return (
    <>
      <CoverImage/>
      <ProfileInfo/>
      <Tweets tweets={tweets} />
    </>

  )
}

export default MyProfile
