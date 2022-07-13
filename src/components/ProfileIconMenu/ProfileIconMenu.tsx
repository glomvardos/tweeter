import { MdKeyboardArrowDown, MdLogout, MdSettings } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../UI/ProfileIcon";
import stringMethods from "../../utils/stringMethods";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import Divider from "../UI/Divider";
import useToggleMenu from "../../hooks/useToggleMenu";
import useCache from "../../hooks/useCache";
import { UserTypes } from "../../interfaces/user";
import tokenMethods from "../../utils/token/tokenMethods";
import { routes } from "../../constants/routes";
import { useQueryClient } from "react-query";

const ProfileIconMenu = () => {
  const { ref, setIsOpen, isOpen } = useToggleMenu();
  const queryClient = useQueryClient();
  const { data: user } = useCache<UserTypes>("user");
  const navigate = useNavigate();
  const fullName =
    user?.firstname &&
    user?.lastname &&
    `${stringMethods.capitalize(user.firstname)} ${stringMethods.capitalize(
      user.lastname
    )}`;

  const onLogout = () => {
    navigate(routes.login);
    queryClient.clear();
    tokenMethods.removeToken();
  };

  return (
    <div ref={ref} className="relative h-full">
      <div
        onClick={() => setIsOpen((prevState: boolean) => !prevState)}
        className="cursor-pointer flex items-center gap-3 h-full"
      >
        <ProfileIcon imgSrc="" />
        <p className="hidden sm:block">{fullName}</p>
        <MdKeyboardArrowDown size={20} />
      </div>

      <Dropdown showDropdown={isOpen}>
        <DropdownItem
          iconElement={<FaUserCircle size={20} />}
          text="My Profile"
        />
        <DropdownItem iconElement={<HiUsers size={20} />} text="Group Chat" />
        <DropdownItem iconElement={<MdSettings size={23} />} text="Settings" />
        <Divider />
        <DropdownItem
          color="text-error"
          iconElement={<MdLogout size={23} />}
          text="Log out"
          onClickHandler={onLogout}
        />
      </Dropdown>
    </div>
  );
};

export default ProfileIconMenu;
