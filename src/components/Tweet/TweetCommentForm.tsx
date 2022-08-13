import { useFormik } from 'formik'
import Input from '../../pages/Auth/components/UI/Input'
import validationSchema from '../../utils/validationSchema'
import useUpdateData from '../../hooks/useUpdateData'
import apiService from '../../services/api/apiService'

interface Props {
  tweetId: number
}
const TweetCommentForm = ({ tweetId }:Props) => {
  const { mutate: createComment } = useUpdateData({ key:'tweets', mutationFn: apiService.createTweetComment })

  const formik = useFormik({
    initialValues: {
      comment: '',
    },
    validationSchema: validationSchema.createComment,
    onSubmit: values => {
      createComment({ comment: values.comment, tweetId })
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className='w-full'>
      <textarea
        placeholder="Tweet your reply"
        className='overflow-y-hidden w-full h-full text-base resize-none rounded-lg px-3 py-2 border-gray-300 placeholder:text-sm placeholder:text-gray-300 border-[0.0625rem] border-solid outline-none focus:outline-none hover:border-primary-blue focus:border-primary-blue transition-all duration-200'
        {...formik.getFieldProps('comment')}
        rows={1}
      />
      {/*<button type='submit'>test</button>*/}
    </form>
  )
}

export default TweetCommentForm
