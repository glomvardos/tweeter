import Tweets from '../../containers/Tweets/Tweets'
import useGetData from '../../hooks/useGetData'
import { TweetTypes } from '../../interfaces/tweet'
import apiService from '../../services/api/apiService'
import RenderIf from '../../components/UI/RenderIf'
import DisplayMessage from '../../components/UI/DisplayMessage'

const Bookmarks = () => {
  const { data: tweets } = useGetData<TweetTypes[]>({ queryKey: 'bookmarks', queryFn: apiService.getSavedTweets })
  return (
    <>
      <RenderIf isTrue={tweets?.length === 0}>
        <DisplayMessage text="You haven't saved any tweet yet" />
      </RenderIf>

      <RenderIf isTrue={tweets?.length !== 0}>
        <Tweets tweets={tweets} />
      </RenderIf>
    </>
  )
}

export default Bookmarks
