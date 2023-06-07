import { useDispatch } from 'react-redux'
import { signin } from '../../services/auth.service'
import { loginSuccess } from '../../store/features/user.slice'
import useMutate from './useMutate'

export default function useLogin(close, reset) {
  const dispatch = useDispatch()

  const { mutate, isLoading } = useMutate(signin, {
    onSuccess: (data) => {
      const userData = {
        id: data?.data?._id,
        name: data?.data?.name,
        username: data?.data?.username,
        isAdmin: data?.data?.isAdmin
      }

      const payload = {
        user: userData,
        token: data?.data.token
      }

      dispatch(loginSuccess(payload))
      close()
      reset()
    }
  })

  function login(data) {
    mutate(data)
  }

  return { login, isLoading }
}
