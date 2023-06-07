import { Button, Title } from '@mantine/core'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  DeleteButton,
  EditButton,
  PublishButton,
  UpdateButton
} from '../components/app/Blogs/Actions'
import CreateHeader from '../components/app/Blogs/CreateHeader'
import Editor from '../components/ui/Editor'
import useGetBlog from '../lib/hooks/useGetBlog'
import useSession from '../lib/hooks/useSession'
import { BlogContainer, Buttons, ContentWrapper, Header } from './style'

export default function BlogPage() {
  const { id } = useParams()
  const location = useLocation()
  const search = new URLSearchParams(location?.search).get('edit')

  const { data, isLoading, isError } = useGetBlog(id)
  const { user } = useSession()
  const navigate = useNavigate()

  if (isError) return <div>Something went wrong</div>
  if (isLoading) return <div>Loading ....</div>

  if (!data.published && !user.isAdmin) return navigate(-1)

  const contentObj = { __html: data.content }

  return (
    <BlogContainer>
      <Header>
        {search ? (
          <CreateHeader noButton />
        ) : (
          <Title color={data.published ? 'black' : 'red'}>{data.title}</Title>
        )}
        <Buttons>
          <Button variant='outline' onClick={() => navigate('/blogs')}>
            Back
          </Button>
          {user?.isAdmin && (
            <>
              {!search && <EditButton id={id} data={data} />}
              <DeleteButton id={id} />
              {!data.published && !search && <PublishButton id={id} />}
            </>
          )}
        </Buttons>
      </Header>
      {search ? <Editor /> : <ContentWrapper dangerouslySetInnerHTML={contentObj} />}
      {search && (
        <UpdateButton style={{ width: '50%', marginInline: 'auto', marginTop: '2rem' }} id={id} />
      )}
    </BlogContainer>
  )
}
