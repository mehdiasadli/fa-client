import { Button, Modal, useMantineTheme, TextInput, PasswordInput } from '@mantine/core'
import styled from 'styled-components'
import { loginSchema } from '../../lib/schemas'
import { useForm, zodResolver } from '@mantine/form'
import useLogin from '../../lib/hooks/useLogin'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default function LoginModal({ opened, onClose }) {
  const theme = useMantineTheme()
  const form = useForm({
    validate: zodResolver(loginSchema),
    initialValues: {
      username: '',
      password: ''
    }
  })
  const { login, isLoading } = useLogin(onClose, form.reset)

  function onSubmit(values) {
    login(values)
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title='Login To Your Account'
      overlayProps={{
        color: theme.colors.gray[2],
        opacity: 0.55,
        blur: 3
      }}
      centered
    >
      <Wrapper onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          name='username'
          placeholder='ex. exampleuser'
          label='Username'
          {...form.getInputProps('username')}
        />
        <PasswordInput
          name='password'
          placeholder='ex. example123'
          label='Password'
          {...form.getInputProps('password')}
        />
        <Button
          variant={'outline'}
          type='submit'
          disabled={form.errors?.username || form.errors?.password || isLoading}
        >
          Log in
        </Button>
      </Wrapper>
    </Modal>
  )
}
