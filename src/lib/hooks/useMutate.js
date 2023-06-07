import toast from 'react-hot-toast'
import { useMutation } from 'react-query'

export default function useMutate(fn, options) {
  const { mutate, isLoading } = useMutation(fn, {
    onError: (err) => {
      toast.error(err?.response?.data?.message || 'Something went wrong')
      if (options?.onError) {
        options.onError(err)
      }
    },
    onSuccess: ({ data }) => {
      if (options?.onSuccess) {
        options.onSuccess(data)
      }
    },
    retry: false
  })

  return { mutate, isLoading }
}
