interface Props {
  commentsCount: number
  retweetsCount?: number
  savedCount: number
}

const TweetActionsCount = ({ commentsCount = 200, retweetsCount = 32, savedCount = 44 }:Props) => {
  return (
    <div className='flex items-center justify-end gap-4 text-sm text-[#BDBDBD] py-[10px] font-medium'>
      <p>{commentsCount} {commentsCount === 1 ? 'Comment' : 'Comments'}</p>
      <p>{retweetsCount} {retweetsCount === 1 ? 'Retweet' : 'Retweets'}</p>
      <p>{savedCount} Saved</p>
    </div>
  )
}

export default TweetActionsCount
