import UserMethods from '../../../../utils/user/userMethods'
import Button from '../../../../components/UI/Button'
import { IoPersonAdd } from 'react-icons/io5'
import CountFollows from './CountFollows'

const ProfileInfo = () => {
  const user = UserMethods.getUser()
  return (
    <div className='p-6 bg-dark-gray rounded-xl shadow-md relative z-10 mt-[28vh]'>
      <div className='flex flex-wrap gap-6 justify-between md:items-center'>
        <div className='flex flex-col gap-6 font-semibold md:items-center md:flex-row'>
          <h2 className='text-white text-lg md:text-2xl '>{`${user?.firstname} ${user?.lastname}`}</h2>
          <div className='flex gap-6'>
            <CountFollows count='2,569' text='Following'/>
            <CountFollows count='10.8K' text='Followers'/>
          </div>
        </div>

        <Button text='Follow' width='w-[101px]' height='h-[32px]' >
          <IoPersonAdd/>
        </Button>
      </div>

    </div>
  )
}

export default ProfileInfo
