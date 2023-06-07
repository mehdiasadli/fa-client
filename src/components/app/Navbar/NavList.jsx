import NavLink from './NavLink'
import { NavListContainer } from './style'
import useSession from '../../../lib/hooks/useSession'

const navlinks = [
  { name: 'Home', path: '/', color: 'blue' },
  { name: 'Tasks', path: '/tasks', color: 'purple', privateTab: true },
  { name: 'Blogs', path: '/blogs', color: 'green' },
  { name: 'Calendar', path: '/calendar', color: 'orange', privateTab: true }
]

export default function NavList() {
  const { token } = useSession()

  return (
    <NavListContainer>
      {navlinks.map(({ name, path, color, privateTab }) =>
        privateTab && !token ? null : <NavLink key={path} name={name} path={path} color={color} />
      )}
    </NavListContainer>
  )
}
