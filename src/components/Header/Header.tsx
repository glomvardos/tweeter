import Logo from "../UI/Logo";
import Navigation from "../Navigation/Navigation";
import ProfileIconMenu from "../ProfileIconMenu/ProfileIconMenu";

const Header = () => {
  return (
    <header className="h-[70px] bg-white flex items-center justify-between px-5 md:px-8 lg:px-16 shadow-sm">
      <Logo width={140} />
      <Navigation />
      <ProfileIconMenu />
    </header>
  );
};

export default Header;
