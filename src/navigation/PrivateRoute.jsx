import { Navigate } from 'react-router-dom'
import useSession from '../lib/hooks/useSession'

export default function PrivateRoute({ element, onlyAdmin = false }) {
  const { user, token } = useSession()

  return token ? (
    onlyAdmin ? (
      user?.isAdmin ? (
        element
      ) : (
        <Navigate to='/' />
      )
    ) : (
      element
    )
  ) : (
    <Navigate to='/' />
  )
}
