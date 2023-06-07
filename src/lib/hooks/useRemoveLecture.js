import { useQueryClient } from 'react-query'
import { removeLecture } from '../../services/lecture.service'
import useMutate from './useMutate'

export default function useRemoveLecture() {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutate(removeLecture, {
    onSuccess: () => {
      queryClient.refetchQueries('lectures')
    }
  })

  function remove(id) {
    mutate(id)
  }

  return { remove, isLoading }
}
