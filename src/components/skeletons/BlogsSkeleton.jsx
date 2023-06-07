import { Skeleton } from '@mantine/core'
import styled from 'styled-components'

const BlogGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`
export const CardContainer = styled.div`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.slate[100]};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`
export default function BlogsSkeleton() {
  return (
    <BlogGrid>
      {Array.from({ length: 12 }, (_, i) => i).map((i) => (
        <Skeleton key={i} height={120} />
      ))}
    </BlogGrid>
  )
}
