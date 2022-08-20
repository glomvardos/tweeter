import Divider from '../../../../components/UI/Divider'
import TweetForm from './TweetForm'
import Text from '../UI/Text'

const CreateTweet = () => {
  return (
    <div className="w-full rounded-xl bg-dark-gray shadow-md p-5">
      <Text text="Tweet something" color="text-primary-text" />
      <Divider />
      <TweetForm />
    </div>
  )
}

export default CreateTweet
