import Logo from "../UI/Logo";
import NavLink from "./NavLink";
import { routes } from "../../constants/routes";

const Navigation = () => {
  return (
    <header className="h-[70px] flex items-center justify-between px-16 shadow-md">
      <Logo width={140} />
      <nav className="flex items-center gap-20">
        <NavLink text="Home" path={routes.home} />
        <NavLink text="Explore" path={routes.explore} />
        <NavLink text="Bookmarks" path={routes.bookmarks} />
      </nav>
      <div className="w-[140px]" />
    </header>
  );
};

export default Navigation;
