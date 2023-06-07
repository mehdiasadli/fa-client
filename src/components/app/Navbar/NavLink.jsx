import { useLocation } from 'react-router-dom'
import { NavItem, StyledLink } from './style'

export default function NavLink({ name, path, color }) {
  const { pathname } = useLocation()

  return (
    <NavItem active={pathname === path ? 1 : 0} color={color}>
      <StyledLink to={path}>{name}</StyledLink>
    </NavItem>
  )
}
