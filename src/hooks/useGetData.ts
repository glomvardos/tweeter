import { AxiosError } from 'axios'
import { QueryFunction, useQuery } from 'react-query'
import tokenMethods from '../utils/token/tokenMethods'
import { ServerError } from '../interfaces/api'

interface Props {
  queryKey: string;
  queryFn: QueryFunction<any, string>;
}

interface DataTypes<T> {
  isLoading: boolean;
  data: T;
  serverError: AxiosError<ServerError>;
}

const useGetData = <T extends unknown>({ queryKey, queryFn }: Props) => {
  const { isLoading, data, error } = useQuery(queryKey, queryFn, {
    enabled: !!tokenMethods.getAccessToken(), // only fetch if token is present,
  })

  const serverError = error as AxiosError<ServerError>

  const returnedData: DataTypes<T> = {
    isLoading,
    data,
    serverError,
  }

  return returnedData
}

export default useGetData

