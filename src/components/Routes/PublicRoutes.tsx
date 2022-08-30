import { Navigate, Outlet } from 'react-router-dom'
import { routes } from '../../constants/routes'
import tokenMethods from '../../utils/token/tokenMethods'
import userMethods from '../../utils/user/userMethods'

const PublicRoutes = () => {
  const token = tokenMethods.getAccessToken()
  const authUser = userMethods.getUser()
  
  return !token && !authUser ? <Outlet /> : <Navigate to={routes.home} />
}

export default PublicRoutes
