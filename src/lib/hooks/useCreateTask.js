import toast from 'react-hot-toast'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { createTask } from '../../services/task.service'
import useMutate from './useMutate'

export default function useCreateTask() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutate(createTask, {
    onSuccess: () => {
      toast.success('Toast created successfully')
      navigate('/tasks')
      queryClient.refetchQueries('tasks')
      queryClient.refetchQueries('task')
    }
  })

  function saveTask(data) {
    mutate(data)
  }

  return { saveTask, isLoading }
}
