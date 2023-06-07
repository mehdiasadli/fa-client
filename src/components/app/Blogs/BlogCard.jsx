import { CardContainer, ButtonContainer } from './style'
import { Button, Title } from '@mantine/core'
import useSession from '../../../lib/hooks/useSession'
// import useBlog from '../../../lib/hooks/useBlog'
import { useNavigate } from 'react-router-dom'
import { DeleteButton, EditButton, PublishButton } from './Actions'

export default function BlogCard({ item }) {
  const contentObj = { __html: item.content.slice(0, 250) + '...' }
  const { user } = useSession()
  // const { publish, removeBlog } = useBlog()
  const navigate = useNavigate()

  return (
    <CardContainer published={item.published ? 1 : 0}>
      <Title size>{item.title}</Title>
      <div dangerouslySetInnerHTML={contentObj} />
      <ButtonContainer>
        <Button
          variant={'outline'}
          style={{ width: !item.published ? '25%' : '100%' }}
          onClick={() => navigate('/blog/' + item._id)}
        >
          Read
        </Button>
        {user?.isAdmin && (
          <>
            <EditButton id={item._id} data={item} />
            <DeleteButton id={item._id} />

            {!item.published && <PublishButton id={item._id} />}
          </>
        )}
      </ButtonContainer>
    </CardContainer>
  )
}
