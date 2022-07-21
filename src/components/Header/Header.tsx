import { useNavigate } from 'react-router-dom'
import Logo from '../UI/Logo'
import Navigation from '../Navigation/Navigation'
import ProfileIconMenu from '../ProfileIconMenu/ProfileIconMenu'
import { routes } from '../../constants/routes'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="h-[70px] z-10 bg-white flex items-center justify-between px-5 md:px-8 lg:px-16 shadow-sm top-0 sticky">
      <Logo width={140} onClickHandler={() => navigate(routes.home)} />
      <Navigation />
      <ProfileIconMenu />
    </header>
  )
}

export default Header
