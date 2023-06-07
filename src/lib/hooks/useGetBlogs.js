import { getBlogs } from '../../services/blog.service'
import useFetch from './useFetch'

export default function useGetBlogs() {
  return useFetch('blogs', getBlogs)
}
