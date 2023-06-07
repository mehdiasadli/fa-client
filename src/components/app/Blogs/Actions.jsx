import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import useBlog from '../../../lib/hooks/useBlog'
import useBlogEdit from '../../../lib/hooks/useBlogEdit'

export function PublishButton({ id, label = 'Publish' }) {
  const { publish } = useBlog()

  return (
    <Button color='green' variant={'outline'} onClick={() => publish(id)}>
      {label}
    </Button>
  )
}

export function DeleteButton({ id, label = 'Delete' }) {
  const { removeBlog } = useBlog()

  return (
    <Button color='red' variant={'outline'} onClick={() => removeBlog(id)}>
      {label}
    </Button>
  )
}

export function EditButton({ id, data, label = 'Edit' }) {
  const navigate = useNavigate()
  const { editBlog } = useBlogEdit()

  function handleClick() {
    editBlog({ title: data.title, content: data.content })
    navigate('/blog/' + id + '?edit=true')
  }

  return (
    <Button color='orange' variant={'outline'} onClick={handleClick}>
      {label}
    </Button>
  )
}

export function UpdateButton({ id, style = {}, label = 'Update' }) {
  const { title, content } = useBlogEdit()
  const { editBlog } = useBlog()

  return (
    <Button
      color='orange'
      variant={'outline'}
      onClick={() => editBlog(id, { title, content })}
      style={style}
    >
      {label}
    </Button>
  )
}
