import { Image } from '@mantine/core'
import styled from 'styled-components'

import { logo } from '../../assets/images'

const Container = styled.div`
  height: ${(props) => props.height || '80%'};
  aspect-ratio: 3/4;
`

export default function Logo({ height, width }) {
  return (
    <Container height={height} width={width}>
      <Image src={logo} alt='Logo' />
    </Container>
  )
}
