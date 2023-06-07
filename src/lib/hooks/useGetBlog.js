import { getBlog } from '../../services/blog.service'
import useFetch from './useFetch'

export default function useGetBlog(id) {
  return useFetch(['blog', id], () => getBlog(id))
}
