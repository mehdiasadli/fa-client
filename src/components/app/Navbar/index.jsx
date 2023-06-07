import LoginButton from './LoginButton'

import { Container, UserSectionContainer } from './style'

import useSession from '../../../lib/hooks/useSession'
import UserSection from './UserSection'
import Logo from '../../ui/Logo'
import NavList from './NavList'

export default function Navbar() {
  const { token } = useSession()

  return (
    <Container>
      <Logo />
      <NavList />
      <UserSectionContainer>{token ? <UserSection /> : <LoginButton />}</UserSectionContainer>
    </Container>
  )
}
