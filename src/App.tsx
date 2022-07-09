import { Route, Routes } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import Login from './pages/auth/Login'
import { routes } from './constants/routes'
import Register from './pages/auth/Register'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
      </Routes>
      <ToastContainer position='top-center' autoClose={3000} pauseOnFocusLoss={false} transition={Slide} />
    </>
  )
}

export default App
