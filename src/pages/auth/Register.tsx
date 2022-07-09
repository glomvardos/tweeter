import { useState } from 'react'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import Logo from '../../components/UI/Logo'
import Container from './components/UI/Container'
import Form from './components/UI/Form'
import Input from './components/UI/Input'
import Label from './components/UI/Label'
import InputWrapper from '../../components/UI/InputWrapper'
import LoginRegisterLink from './components/UI/LoginRegisterLink'
import { RegisterTypes } from '../../interfaces/auth'
import validationSchema from '../../utils/validationSchema'
import authApi from '../../services/auth/authApi'
import { routes } from '../../constants/routes'

const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const initialValues: RegisterTypes = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema.register,
    onSubmit: values => {
      setIsLoading(true)
      authApi
        .register(values)
        .then(_ => {
          toast.success('You have successfully registered!')
          formik.resetForm()
          navigate(routes.login)
        })
        .catch(err => toast.error(err.message))
        .finally(() => setIsLoading(false))
    },
  })

  return (
    <Container>
      <Logo />
      <Form
        display='grid'
        btnText='Register'
        title='Register'
        text='Enter your information'
        isLoading={isLoading}
        onSubmit={formik.handleSubmit}
      >
        <InputWrapper>
          <Label text='Firstname' />
          <Input
            id='Firstname'
            type='text'
            placeholder='Your Firstname'
            hasError={formik.errors.firstname && formik.touched.firstname ? true : false}
            {...formik.getFieldProps('firstname')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text='Lastname' />
          <Input
            id='Lastname'
            type='text'
            placeholder='Your Lastname'
            hasError={formik.errors.lastname && formik.touched.lastname ? true : false}
            {...formik.getFieldProps('lastname')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text='Email' />
          <Input
            id='Email'
            type='email'
            placeholder='Your Email'
            hasError={formik.errors.email && formik.touched.email ? true : false}
            {...formik.getFieldProps('email')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text='Password' />
          <Input
            id='Password'
            type='password'
            placeholder='Your Password'
            hasError={formik.errors.password && formik.touched.password ? true : false}
            {...formik.getFieldProps('password')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text='Confirm Password' />
          <Input
            id='Confirm Password'
            type='password'
            placeholder='Confirm Password'
            hasError={formik.errors.confirmPassword && formik.touched.confirmPassword ? true : false}
            {...formik.getFieldProps('confirmPassword')}
          />
        </InputWrapper>
      </Form>
      <LoginRegisterLink text='Already have an account?' path='/login' />
    </Container>
  )
}

export default Register