import { MutationFunction, useMutation, useQueryClient } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { ServerError } from '../interfaces/api'
import { toast } from 'react-toastify'

interface Props<T> {
  key: string,
  mutationFn:MutationFunction<AxiosResponse | undefined, T >,
}

const useUpdateData = <T extends unknown>  ({ key, mutationFn }:Props<T>) => {
  const queryClient = useQueryClient()
  const { isLoading, isError, error, mutate } = useMutation((params:T) => mutationFn(params), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(key)
    },
    onError: (apiError:AxiosError<ServerError>) => {
      toast.error(apiError.message)
    },
  })

  return { isLoading, isError, error, mutate }
}

export default useUpdateData