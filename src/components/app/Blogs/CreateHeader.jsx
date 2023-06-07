import { Button, TextInput } from '@mantine/core'
import { Buttons, Header } from './style'
import useBlogEdit from '../../../lib/hooks/useBlogEdit'
import useBlog from '../../../lib/hooks/useBlog'

export default function CreateHeader({ noButton = false }) {
  const { title, changeTitle } = useBlogEdit()
  const { saveBlog } = useBlog()

  function onChange(e) {
    const value = e.target.value
    changeTitle(value)
  }

  return (
    <Header>
      <TextInput
        value={title}
        onChange={onChange}
        placeholder='Title'
        size='md'
        style={{ width: '30rem' }}
      />
      {!noButton && (
        <Buttons>
          <Button variant={'outline'} size='md' onClick={() => saveBlog()}>
            Save
          </Button>
        </Buttons>
      )}
    </Header>
  )
}
