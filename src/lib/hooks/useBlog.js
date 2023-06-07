import toast from 'react-hot-toast'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { createBlog, deleteBlog, publishBlog, updateBlog } from '../../services/blog.service'
import useBlogEdit from './useBlogEdit'
import useMutate from './useMutate'

export default function useBlog() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { title, content, clearDraft } = useBlogEdit()

  const { mutate, isLoading } = useMutate(createBlog, {
    onSuccess: () => {
      clearDraft()
      toast.success('Blog created successfully')
      navigate('/blogs')
      queryClient.refetchQueries('blogs')
    }
  })
  const { mutate: publishMutate, isLoading: publishLoading } = useMutate(publishBlog, {
    onSuccess: () => {
      queryClient.refetchQueries('blogs')
      queryClient.refetchQueries('blog')
      toast.success('Blog published successfully')
    }
  })
  const { mutate: deleteMutate, isLoading: deleteLoading } = useMutate(deleteBlog, {
    onSuccess: () => {
      queryClient.refetchQueries('blogs')
      queryClient.refetchQueries('blog')
      navigate('/blogs')
      toast.success('Blog deleted successfully')
    }
  })
  const { mutate: updateMutate, isLoading: updateLoading } = useMutate(updateBlog, {
    onSuccess: ({ data }) => {
      queryClient.refetchQueries('blogs')
      queryClient.refetchQueries('blog')
      navigate('/blog/' + data._id)
      toast.success('Blog updated successfully')
    }
  })

  function saveBlog() {
    mutate({ title, content })
  }

  function publish(id) {
    publishMutate(id)
  }

  function removeBlog(id) {
    deleteMutate(id)
  }

  function editBlog(id, data) {
    updateMutate({ id, data })
  }

  return {
    saveBlog,
    publish,
    isLoading,
    publishLoading,
    removeBlog,
    deleteLoading,
    editBlog,
    updateLoading
  }
}
