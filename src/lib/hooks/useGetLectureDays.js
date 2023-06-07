import { getLectureDays } from '../../services/lecture.service'
import useFetch from './useFetch'

export default function useGetLectureDays() {
  return useFetch('lectures', getLectureDays)
}
