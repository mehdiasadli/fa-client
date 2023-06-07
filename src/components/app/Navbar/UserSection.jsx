import { Avatar, Menu } from '@mantine/core'
import useSession from '../../../lib/hooks/useSession'
import useLogout from '../../../lib/hooks/useLogout'
import { getInitials } from '../../../lib/utils'
import { Icon } from './style'
import { Link } from 'react-router-dom'

export default function UserSection() {
  const { user } = useSession()
  const { logout } = useLogout()

  return (
    <>
      {/* <Icon /> */}
      <Menu shadow='md'>
        <Menu.Target>
          <Avatar color='green' radius='xl' style={{ cursor: 'pointer' }}>
            {getInitials(user.name)}
          </Avatar>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>{user.name}</Menu.Label>
          {/* <Menu.Item>
            <Link to='/profile'>Profile</Link>
          </Menu.Item> */}
          <Menu.Item onClick={() => logout()}>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
