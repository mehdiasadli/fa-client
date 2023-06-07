import toast from 'react-hot-toast'
import { useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { submitTask } from '../../services/task.service'
import { changeTab } from '../../store/features/task.slice'
import useMutate from './useMutate'

export default function useSubmit(id) {
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const { mutate, isLoading } = useMutate(submitTask, {
    onSuccess: () => {
      queryClient.refetchQueries('tasks')
      queryClient.refetchQueries('task')
      dispatch(changeTab('desc'))
      toast.success('Successfull')
    }
  })

  function solveTask() {
    mutate(id)
  }

  return { solveTask, isLoading }
}
