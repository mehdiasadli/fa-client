import styled from 'styled-components'
import { NAVBAR_HEIGHT } from '../../lib/constants'
import Navbar from '../app/Navbar'

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`
const Wrapper = styled.main`
  padding-inline: 3rem;
  padding-block: ${NAVBAR_HEIGHT + 1}rem;
`

export default function AppLayout({ children }) {
  return (
    <Container>
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}
