import { useState } from 'react'
import { useFormik } from 'formik'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import Button from '../../../../components/UI/Button'
import TweetUploadMedia from './TweetUploadMedia'
import TweetVisibility from './TweetVisibility'

import { CreateTweetTypes } from '../../../../interfaces/tweet'
import apiService from '../../../../services/api/apiService'
import { ServerError } from '../../../../interfaces/api'


const TweetForm = () => {
  const [tweetVisibility, setTweetVisibility] = useState<string>('Everyone')
  const queryClient = useQueryClient()
  // TODO: handle is loading
  const {  mutate: createTweet } = useMutation((values: CreateTweetTypes) => apiService.createTweet(values),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries('tweets')
      },
      onError:(error: AxiosError<ServerError>) => {
        toast.error(error.message)
      },
    })

  const initialValues = {
    description: '',
  }
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      // TODO: handle is public
      createTweet({ description: values.description, isPublic: true })
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
          <TweetVisibility
            tweetVisibility={tweetVisibility}
            setTweetVisibility={setTweetVisibility}
          />
        </div>
        <Button
          text="Tweet"
          onClickHandler={() => {}}
          px="px-6"
          py="py-[10px]"
        />
      </div>
    </form>
  )
}

export default TweetForm
