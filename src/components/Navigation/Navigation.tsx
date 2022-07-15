import NavLink from './NavLink'
import { routes } from '../../constants/routes'

const Navigation = () => {
  return (
    <nav className="hidden lg:flex lg:items-center lg:gap-16 h-full">
      <NavLink text="Home" path={routes.home} />
      <NavLink text="Explore" path={routes.explore} />
      <NavLink text="Bookmarks" path={routes.bookmarks} />
    </nav>
  )
}

export default Navigation

