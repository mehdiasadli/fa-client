import { useDisclosure } from '@mantine/hooks'
import { Button } from '@mantine/core'
import LoginModal from '../../modals/LoginModal'

export default function LoginButton() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Button variant={'outline'} radius='xl' onClick={() => open()}>
        Log in
      </Button>
      <LoginModal opened={opened} onClose={close} />
    </>
  )
}
