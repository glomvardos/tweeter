import { MdKeyboardArrowDown, MdLogout, MdSettings } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import ProfileIcon from '../UI/ProfileIcon'
import stringMethods from '../../utils/stringMethods'
import Dropdown from '../Dropdown/Dropdown'
import DropdownItem from '../Dropdown/DropdownItem'
import Divider from '../UI/Divider'
import useToggleMenu from '../../hooks/useToggleMenu'
import useLogout from '../../hooks/useLogout'
import { routes } from '../../constants/routes'
import userMethods from '../../utils/user/userMethods'


const ProfileIconMenu = () => {
  const { ref, setIsOpen, isOpen } = useToggleMenu()
  const { onLogout } = useLogout()
  const user = userMethods.getUser()
  const navigate = useNavigate()
  const fullName =
    user?.firstname &&
    user?.lastname &&
    `${stringMethods.capitalize(user.firstname)} ${stringMethods.capitalize(
      user.lastname,
    )}`



  return (
    <div ref={ref} className="relative h-full">
      <div
        onClick={() => setIsOpen((prevState: boolean) => !prevState)}
        className="cursor-pointer flex items-center gap-3 h-full"
      >
        <ProfileIcon imgSrc="" />
        <p className="hidden sm:block text-white">{fullName}</p>
        <MdKeyboardArrowDown size={20} color='#fff' />
      </div>

      <Dropdown showDropdown={isOpen} style={{ top: '80px', right: '0' }}>
        <DropdownItem
          iconElement={<FaUserCircle size={20} />}
          text="My Profile"
          onClickHandler={() => navigate(routes.profile)}
        />
        <DropdownItem iconElement={<HiUsers size={20} />} text="Group Chat" />
        <DropdownItem iconElement={<MdSettings size={23} />} text="Settings" onClickHandler={() => navigate(routes.settings)} />
        <Divider />
        <DropdownItem
          color="text-error"
          iconElement={<MdLogout size={23} />}
          text="Log out"
          onClickHandler={onLogout}
        />
      </Dropdown>
    </div>
  )
}

export default ProfileIconMenu
