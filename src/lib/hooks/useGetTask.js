import { getTask } from '../../services/task.service'
import useFetch from './useFetch'

export default function useGetTask(id) {
  return useFetch(['task', id], () => getTask(id))
}
