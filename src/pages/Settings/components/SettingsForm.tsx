import { useEffect } from 'react'
import { useFormik } from 'formik'
import Input from '../../../components/Form/Input'
import Label from '../../../components/Form/Label'
import useCache from '../../../hooks/useCache'
import { UserTypes } from '../../../interfaces/user'
import userMethods from '../../../utils/user/userMethods'
import InputWrapper from '../../../components/UI/InputWrapper'
import Button from './Button'
import validationSchema from '../../../utils/validationSchema'

const SettingsForm = () => {
  const authUser = userMethods.getUser()
  const formik = useFormik({
    initialValues: {
      firstName: authUser?.firstname,
      lastName: authUser?.lastname,
      email: authUser?.email,
      password: '',
      confirmPassword: '',
    },
    validationSchema: () => validationSchema.updateInformation(formik.values.password.length > 0),
    onSubmit: values => {
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
            hasError={!!(formik.touched.firstName && formik.errors.firstName)}
            placeholder='Enter your first name'
            {...formik.getFieldProps('firstName')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text='Last name'/>
          <Input
            type='text' 
            id='Last Name'
            hasError={!!(formik.touched.lastName && formik.errors.lastName)}
            placeholder='Enter your last name'
            {...formik.getFieldProps('lastName')}
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
