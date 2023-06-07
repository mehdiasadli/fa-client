import { getTasks } from '../../services/task.service'
import useFetch from './useFetch'

export default function useGetTasks() {
  return useFetch('tasks', getTasks)
}
