import { useNavigate } from "react-router-dom";
import Logo from "../UI/Logo";
import Navigation from "../Navigation/Navigation";
import ProfileIconMenu from "../ProfileIconMenu/ProfileIconMenu";
import { routes } from "../../constants/routes";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="h-[70px] bg-white flex items-center justify-between px-5 md:px-8 lg:px-16 shadow-sm">
      <Logo width={140} onClickHandler={() => navigate(routes.home)} />
      <Navigation />
      <ProfileIconMenu />
    </header>
  );
};

export default Header;
