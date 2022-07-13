import { MdKeyboardArrowDown, MdLogout, MdSettings } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import ProfileIcon from "../UI/ProfileIcon";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import stringMethods from "../../utils/stringMethods";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import Divider from "../UI/Divider";
import useToggleMenu from "../../hooks/useToggleMenu";
import { logout } from "../../store/auth/auth.slice";

const ProfileIconMenu = () => {
  const { ref, setIsOpen, isOpen } = useToggleMenu();
  const authUser = useAppSelector((state) => state.auth.authUser);
  const dispatch = useAppDispatch();
  const fullName =
    authUser?.firstname &&
    authUser?.lastname &&
    `${stringMethods.capitalize(authUser.firstname)} ${stringMethods.capitalize(
      authUser.lastname
    )}`;

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
          onClickHandler={() => dispatch(logout())}
        />
      </Dropdown>
    </div>
  );
};

export default ProfileIconMenu;
