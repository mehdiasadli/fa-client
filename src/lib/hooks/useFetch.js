import { useQuery } from 'react-query'

export default function useFetch(key, fn, options) {
  const { data, isError, isLoading, isFetching, error } = useQuery(key, fn, {
    ...options,
    refetchOnWindowFocus: false
  })

  return {
    data: data?.data?.data,
    response: data?.data,
    isError,
    error,
    isLoading: isLoading || isFetching
  }
}
