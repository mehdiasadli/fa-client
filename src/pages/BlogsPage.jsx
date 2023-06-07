import { ActionIcon } from '@mantine/core'
import Blogs from '../components/app/Blogs'
import BlogsSkeleton from '../components/skeletons/BlogsSkeleton'
import useGetBlogs from '../lib/hooks/useGetBlogs'
import useSession from '../lib/hooks/useSession'
import { Plus } from 'lucide-react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Btn = styled(ActionIcon)`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
`

export default function BlogsPage() {
  const navigate = useNavigate()
  const { data, isLoading, isError } = useGetBlogs()
  const { user } = useSession()

  if (isLoading) return <BlogsSkeleton />
  if (isError) return <div>Something went wrong</div>

  const publishedPosts = data.filter((blog) => blog.published)

  return (
    <>
      <Blogs data={user?.isAdmin ? data : publishedPosts} />
      {user?.isAdmin && (
        <Btn
          size='xl'
          color='blue'
          variant={'outline'}
          radius='xl'
          onClick={() => navigate('/create/blog')}
        >
          <Plus size='5rem' />
        </Btn>
      )}
    </>
  )
}
