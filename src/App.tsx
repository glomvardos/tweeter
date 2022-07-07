import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import { routes } from './constants/routes'
import Register from './pages/auth/Register'

const App = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.register} element={<Register />} />
    </Routes>
  )
}

export default App
