import { useFormik } from 'formik'
import Input from '../../../components/Form/Input'
import Label from '../../../components/Form/Label'
import userMethods from '../../../utils/user/userMethods'
import InputWrapper from '../../../components/UI/InputWrapper'
import Button from './Button'
import validationSchema from '../../../utils/validationSchema'
import apiService from '../../../services/api/apiService'
import { toast } from 'react-toastify'
import UserMethods from '../../../utils/user/userMethods'
import { UpdateUserTypes } from '../../../interfaces/user'

const SettingsForm = () => {
  const authUser = userMethods.getUser()

  const formik = useFormik({
    initialValues:  {
      firstname: authUser!.firstname,
      lastname: authUser!.lastname,
      email: authUser!.email,
      password: '',
      confirmPassword: '',
    },
    validationSchema: () => validationSchema.updateInformation(formik.values.password.length > 0),
    onSubmit: values => {
      apiService.updateUser(values)
        .then((res) => {
          toast.success('Your information has been updated successfully!')
          UserMethods.saveUser(res)
          formik.setValues({
            firstname: res.firstname,
            lastname: res.lastname,
            email: res.email,
            password: '',
            confirmPassword: '',
          })
        })
        .catch((error) =>
          toast.error(error.message),
        )
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-7 mb-10'>
      <h3 className='text-primary-text text-2xl'>Update your information</h3>
      <div className='flex flex-col gap-7 sm:flex-row'>
        <InputWrapper >
          <Label text='First name'/>
          <Input
            type='text'
            id='First Name'
            hasError={!!(formik.touched.firstname && formik.errors.firstname)}
            placeholder='Enter your first name'
            {...formik.getFieldProps('firstname')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text='Last name'/>
          <Input
            type='text' 
            id='Last Name'
            hasError={!!(formik.touched.lastname && formik.errors.lastname)}
            placeholder='Enter your last name'
            {...formik.getFieldProps('lastname')}
          />
        </InputWrapper>
      </div>
      <InputWrapper>
        <Label text='Email'/>
        <Input
          type='email'
          id='Email'
          hasError={!!(formik.touched.email && formik.errors.email)}
          placeholder='Enter your email'
          {...formik.getFieldProps('email')}
        />
      </InputWrapper>
      <InputWrapper >
        <Label text='Password'/>
        <Input
          type='password'
          id='Password'
          hasError={false}
          placeholder='Enter your new password'
          {...formik.getFieldProps('password')}
        />
      </InputWrapper>
      <InputWrapper>
        <Label text='Confirm Password'/>
        <Input
          type='password'
          id='Confirm Password'
          hasError={formik.values.password.length > 0 && !!(formik.errors.confirmPassword && formik.touched.confirmPassword)}
          placeholder='Confirm password'
          {...formik.getFieldProps('confirmPassword')}
        />
      </InputWrapper>
      <Button type='submit' text='Submit' color='bg-primary-blue'/>
    </form>
  )
}

export default SettingsForm
