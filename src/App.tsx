import { Route, Routes } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import { QueryClientProvider, QueryClient } from 'react-query'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import PublicRoutes from './components/Routes/PublicRoutes'
import { routes } from './constants/routes'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import Layout from './containers/Layout/Layout'
import Home from './pages/Home/Home'
import RenderIf from './components/UI/RenderIf'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.explore} element={<div>Explore</div>} />
            <Route path={routes.bookmarks} element={<div>Bookmarks</div>} />
          </Route>
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnFocusLoss={false}
        transition={Slide}
      />
      <RenderIf isTrue={process.env.NODE_ENV === 'development'}>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </RenderIf>
    </QueryClientProvider>
  )
}

export default App
