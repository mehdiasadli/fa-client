import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NAVBAR_HEIGHT } from '../../../lib/constants'

export const Container = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 3rem;
  height: ${NAVBAR_HEIGHT}rem;
  border-bottom: 1px solid ${(props) => props.theme.slate[100]};
  background-color: ${(props) => props.theme.slate[50]};
  position: fixed;
`
export const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  height: 100%;
`
export const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 8rem;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    transition: all 0.2s ease-in-out;
    bottom: 0;
    transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0)')};
    background-color: ${(props) => props.theme.shades[props.color]};
  }

  &:hover {
    &:after {
      transform: scale(1);
    }
  }
`
export const StyledLink = styled(Link)`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const NavListContainer = styled.ul`
  display: flex;
  gap: 2rem;
  height: 100%;
`
export const UserSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`
export const Icon = styled(Bell)`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  padding: 0.25rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.slate[200]};
  }
`
