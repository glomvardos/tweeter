import Button from './Button'

const DeleteAccount = () => {
  return (
    <div className=' flex flex-col mt-7'>
      <h3 className='text-red-600 text-2xl mb-7'>Danger Zone</h3>
      <Button text='Delete Account' color='bg-red-600' type='button' />
    </div>
  )
}

export default DeleteAccount
