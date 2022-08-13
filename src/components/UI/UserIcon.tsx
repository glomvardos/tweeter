import userIcon from '../../assets/images/userIcon.jpeg'
interface Props {
  width?: 'w-10' | 'w-12' | 'w-[150px]'
}

const UserIcon = ({ width = 'w-10' }:Props) => {
  return <img src={userIcon} className={`${width} rounded-xl object-cover`} alt=''/>
}

export default UserIcon
