import styled from 'styled-components'

export const Row = styled.tr`
  transition: all 0.2s ease-in-out;
`

export const DIFF_MAP = {
  SUPER_EASY: 'green',
  EASY: 'blue',
  MEDIUM: 'yellow',
  HARD: 'orange',
  SUPER_HARD: 'red'
}

export const Cell = styled.td`
  cursor: pointer;
  color: ${(props) => (props.diff ? props.theme.shades[DIFF_MAP[props.diff]] : 'black')};
`
export const DescContainer = styled.div`
  height: 40rem;
  padding: 1rem;
  background: ${(props) => props.theme.slate[50]};
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.slate[100]};
`
export const DescContent = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 1rem;
`
export const EditorContainer = styled.div`
  position: relative;
  height: 40rem;
  width: 100%;
  background: ${(props) => props.theme.slate[50]};
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.slate[100]};
  opacity: ${(props) => (props.solved ? '50%' : '100%')};
  user-select: ${(props) => (props.solved ? 'none' : 'auto')};
`
export const DescHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const DescTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  flex: 1;
  color: ${(props) => (props.solved ? props.theme.shades.green : 'black')};
`
export const DescMain = styled.main`
  flex: 1;
`
export const DescFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`
