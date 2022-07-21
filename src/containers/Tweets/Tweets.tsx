import { useMemo } from 'react'
import { TweetTypes } from '../../interfaces/tweet'
import Tweet from '../../components/Tweet/Tweet'

interface Props {
  tweets: TweetTypes[]
}
const Tweets = ({ tweets = [] }:Props) => {
  const sortedTweets = useMemo(() => tweets.sort((a: TweetTypes, b: TweetTypes) => b.createdAt.localeCompare(a.createdAt)), [tweets])
  const displayTweets = sortedTweets.map(tweet => <Tweet key={tweet.id} tweet={tweet}/> )

  return (
    <div className='mt-[50px] flex flex-col gap-7'>
      {displayTweets}
    </div>
  )
  
}

export default Tweets
