interface Props {
  commentsCount?: number
  retweetsCount?: number
  savedCount?: number
}

const TweetActionsCount = ({ commentsCount = 200, retweetsCount = 32, savedCount = 44 }:Props) => {
  return (
    <div className='flex items-center justify-end gap-4 text-sm text-[#BDBDBD] py-[10px] font-medium'>
      <p className='cursor-pointer'>{commentsCount} Comments</p>
      <p className='cursor-pointer'>{retweetsCount} Retweets</p>
      <p className='cursor-pointer'>{savedCount} Saved</p>
    </div>
  )
}

export default TweetActionsCount
