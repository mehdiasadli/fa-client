import styled from 'styled-components'

export const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const ContentWrapper = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.slate[50]};
  border: 1px solid ${(props) => props.theme.slate[100]};
  border-radius: 5px;
`
export const TaskContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
