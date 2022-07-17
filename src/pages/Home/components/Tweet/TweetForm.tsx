import { useState } from 'react'
import { useFormik } from 'formik'
import Button from '../../../../components/UI/Button'
import TweetUploadMedia from './TweetUploadMedia'
import TweetVisibility from './TweetVisibility'

import apiService from '../../../../services/api/apiService'
import useUpdateData from '../../../../hooks/useUpdateData'
import validationSchema from '../../../../utils/validationSchema'


const TweetForm = () => {
  const [isPublic, setIsPublic] = useState<boolean>(true)
  const { isLoading, mutate:createTweet } = useUpdateData({ key: 'tweets', mutationFn: apiService.createTweet })

  const initialValues = {
    description: '',
  }
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema.createTweet(),
    onSubmit: async (values) => {
      createTweet({ description: values.description, isPublic }, {
        onSuccess: () => {
          formik.resetForm()
        },
      })
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea
        placeholder="What's happening?"
        className="w-full p-2 placeholder:font-medium outline-none resize-none"
        {...formik.getFieldProps('description')}
        rows={3}
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <TweetUploadMedia />
          <TweetVisibility isPublic={isPublic} setIsPublic={setIsPublic}/>
        </div>
        <Button
          text="Tweet"
          px="px-6"
          py="py-[10px]"
          isLoading={isLoading}
        />
      </div>
    </form>
  )
}

export default TweetForm
