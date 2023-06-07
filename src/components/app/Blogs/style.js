import styled from 'styled-components'

export const BlogGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`
export const CardContainer = styled.div`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (!props.published ? props.theme.shades.red : props.theme.slate[100])};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  transition: all 0.3s ease;
  &:hover {
    border: 1px solid ${(props) => props.theme.primary[400]};
  }
`
export const ButtonContainer = styled.footer`
  width: 100%;
  display: flex;
  margin-top: auto;
  align-items: center;
  justify-content: space-between;
  gap: 0.1rem;
`
export const Empty = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.slate[600]};
  margin-top: 1rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
