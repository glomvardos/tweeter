import { useNavigate } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { routes } from '../constants/routes'
import tokenMethods from '../utils/token/tokenMethods'
import userMethods from '../utils/user/userMethods'


const useLogout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const onLogout = () => {
    navigate(routes.login)
    queryClient.clear()
    tokenMethods.removeToken()
    userMethods.removeUser()
  }
  return { onLogout }
}

export default useLogout
