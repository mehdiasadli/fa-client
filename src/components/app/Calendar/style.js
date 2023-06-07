import { ActionIcon } from '@mantine/core'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
`
export const Header = styled.header``
export const Main = styled.main`
  padding-block: 0.5rem;
`
export const Month = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`
export const Cell = styled.div`
  position: relative;

  background-color: ${(props) => (props.today ? props.theme.slate[50] : 'transparent')};
  height: 5rem;
  border: 1px solid
    ${(props) =>
      props.noborder
        ? 'transparent'
        : props.today
        ? props.active
          ? props.theme.shades.green
          : props.theme.shades.blue
        : props.theme.slate[100]};
  border-radius: 3px;
  border-left: 7px;
  border-left-style: solid;
  border-left-color: ${(props) =>
    props.noborder
      ? 'transparent'
      : props.active
      ? props.theme.shades.green
      : props.theme.shades.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  color: ${(props) => (props.isweekend ? props.theme.shades.red : props.theme.shades.blue)};
`
export const Days = styled.div`
  height: 2rem;
  margin-bottom: 0.5rem;

  display: flex;
  gap: 0.5rem;
`
export const DayCell = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => (props.active ? props.theme.shades.blue : props.theme.slate[100])};
  border-radius: 3px;
`
export const IconButton = styled(ActionIcon)`
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
`
