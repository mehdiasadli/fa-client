import { useDispatch } from 'react-redux'
import { logout as logOut } from '../../store/features/user.slice'

export default function useLogout() {
  const dispatch = useDispatch()

  function logout() {
    dispatch(logOut())
  }

  return { logout }
}
