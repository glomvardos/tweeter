import ReactDOM from 'react-dom'
import { Dispatch, SetStateAction } from 'react'
import { useFormik } from 'formik'
import UserMethods from '../../../utils/user/userMethods'

interface Props {
  showDeleteModal: boolean;
  setShowDeleteModal:Dispatch<SetStateAction<boolean>>;
  onDeleteAccount: () => void;
}

const DeleteModal = ({ showDeleteModal, setShowDeleteModal, onDeleteAccount }:Props) => {
  const overlay = document.getElementById('overlay') as HTMLElement
  const authUser = UserMethods.getUser()
  const formik = useFormik({
    initialValues: {
      verifyFullname:'',
      verifyDelete: '',
    },
    onSubmit: values => {
      if (values.verifyFullname.trim() === `${authUser?.firstname} ${authUser?.lastname}`
          && values.verifyDelete.trim() === 'delete my account') {
        onDeleteAccount()
      }
    },
  })

  const onCloseModal = () => {
    setShowDeleteModal(false)
    formik.resetForm()
  }

  const inputClasses = 'px-3 py-2 w-full bg-black outline-none text-primary-text rounded-lg border border solid border-gray-500 focus:border-primary-text hover:border-primary-text transition-all duration-200'
  const labelClasses = 'block text-primary-text mb-2 font-light'
  const buttonClasses = 'w-full py-6 hover:text-primary-text hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200'
  const modalClasses = showDeleteModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
  const backdropClasses = showDeleteModal ? 'opacity-100 visible' : 'opacity-0 invisible'
  return ReactDOM.createPortal(
    <>
      <div className={`${backdropClasses} bg-[rgba(0,0,0,0.7)] transition-all duration-500 fixed inset-0 z-50`} onClick={onCloseModal}/>
      <div
        className={`${modalClasses} origin-center transition-all duration-500 fixed rounded-lg border border-solid  border-gray-500 w-[90%] sm:w-[560px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] shadow-md`}>
        <div className='bg-black text-white p-8 flex flex-col items-center gap-6 rounded-t-lg text-center'>
          <p className='font-bold text-2xl'>Delete Account</p>
          <p className='text-primary-text'>This account will be deleted, along with all of its Tweets, Comments and Likes.</p>
          <p className='bg-red-600 rounded-lg w-full p-[10px]'><span className='font-bold'>Warning</span>: This action is not reversible. Please be certain</p>
        </div>
        <div className='bg-dark-gray p-8 border-t border-solid  border-y border-gray-500'>
          <label
            htmlFor='verifyFullname'
            className={labelClasses}
          >
              Enter your full name <span className='font-bold'>{authUser?.firstname}
            </span> <span className='font-bold'>{authUser?.lastname}</span> to continue:</label>
          <input
            type='text'
            id='verifyFullname'
            {...formik.getFieldProps('verifyFullname')}
            className={inputClasses}
          />
          <label
            htmlFor='verifyDelete'
            className={`${labelClasses} mt-[22px]`}
          >To verify, type <span className='font-bold'>delete my account</span> below:
          </label>
          <input
            type='text'
            id='verifyDelete'
            {...formik.getFieldProps('verifyDelete')}
            className={inputClasses}
          />
        </div>
        <div className='flex bg-black rounded-b-lg text-gray-500'>
          <button
            onClick={onCloseModal}
            className={`${buttonClasses} border-r border-solid border-gray-500`}>
                  CANCEL
          </button>
          <button
            className={buttonClasses} type='submit'
            onClick={() => formik.submitForm()}>

                  CONTINUE
          </button>
        </div>
      </div>
    </>,
    overlay,
  )


}

export default DeleteModal
