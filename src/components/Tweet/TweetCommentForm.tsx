import { useFormik } from 'formik'
import validationSchema from '../../utils/validationSchema'
import useUpdateData from '../../hooks/useUpdateData'
import apiService from '../../services/api/apiService'
import { AiOutlineSend } from 'react-icons/ai'

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
      createComment({ comment: values.comment, tweetId }, {
        onSuccess: () => {
          formik.resetForm()
        },
      })
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className='w-full flex items-center gap-2 min-h-[50.41px] max-h-[50.41px] focus-within:min-h-[150px] transition-all duration-200'>
      <textarea
        placeholder="Tweet your reply"
        className='overflow-y-hidden w-full h-full text-base resize-none rounded-lg px-3 py-2 border-gray-300 placeholder:text-sm placeholder:text-gray-300 border-[0.0625rem] border-solid outline-none focus:outline-none hover:border-primary-blue focus:border-primary-blue transition-all duration-200'
        {...formik.getFieldProps('comment')}
        rows={1}
      />
      <button type='submit' className='self-end bg-primary-blue h-[50.41px] px-3 rounded-lg hover:opacity-90 transition-opacity duration-200'>
        <AiOutlineSend className='text-white' size={28}/>
      </button>
    </form>
  )
}

export default TweetCommentForm
