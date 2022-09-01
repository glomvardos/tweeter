import Button from './Button'
import apiService from '../../../services/api/apiService'
import { toast } from 'react-toastify'
import useLogout from '../../../hooks/useLogout'

const DeleteAccount = () => {
  const { onLogout } = useLogout()
  const onDeleteAccount = () => {
    apiService.deleteUser()
      .then(() => {
        onLogout()
        toast.success('Your account has been deleted successfully!')
      })
      .catch((error) => {
        toast.error(error.message)
      })

  }
  return (
    <div className=' flex flex-col mt-7'>
      <h3 className='text-red-600 text-2xl mb-7'>Danger Zone</h3>
      <Button text='Delete Account' color='bg-red-600' type='button' onClickHandler={onDeleteAccount}  />
    </div>
  )
}

export default DeleteAccount
