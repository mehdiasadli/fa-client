import { useQueryClient } from 'react-query'
import { addLecture } from '../../services/lecture.service'
import useMutate from './useMutate'

export default function useAddLecture() {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutate(addLecture, {
    onSuccess: () => {
      queryClient.refetchQueries('lectures')
    }
  })

  function add(date) {
    mutate(date)
  }

  return { isLoading, add }
}
