import { useState } from 'react'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import Logo from '../../components/UI/Logo'
import Container from './components/UI/Container'
import Form from './components/UI/Form'
import Input from '../../components/Form/Input'
import Label from '../../components/Form/Label'
import InputWrapper from '../../components/UI/InputWrapper'
import LoginRegisterLink from './components/UI/LoginRegisterLink'
import { RegisterTypes } from '../../interfaces/auth'
import validationSchema from '../../utils/validationSchema'
import { routes } from '../../constants/routes'
import apiService from '../../services/api/apiService'

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
    onSubmit: (values) => {
      setIsLoading(true)
      apiService
        .register(values)
        .then(() => {
          toast.success('You have successfully registered!')
          formik.resetForm()
          navigate(routes.login)
        })
        .catch((err) => toast.error(err.message))
        .finally(() => setIsLoading(false))
    },
  })

  return (
    <Container>
      <Logo />
      <Form
        display="grid"
        btnText="Register"
        title="Register"
        text="Enter your information"
        isLoading={isLoading}
        onSubmit={formik.handleSubmit}
      >
        <InputWrapper>
          <Label text="First Name" />
          <Input
            id="First Name"
            type="text"
            placeholder="Your First Name"
            hasError={!!(formik.errors.firstname && formik.touched.firstname)}
            {...formik.getFieldProps('firstname')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text="Last Name" />
          <Input
            id="Last Name"
            type="text"
            placeholder="Your Last Name"
            hasError={!!(formik.errors.lastname && formik.touched.lastname)}
            {...formik.getFieldProps('lastname')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text="Email" />
          <Input
            id="Email"
            type="email"
            placeholder="Your Email"
            hasError={!!(formik.errors.email && formik.touched.email)}
            {...formik.getFieldProps('email')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text="Password" />
          <Input
            id="Password"
            type="password"
            placeholder="Your Password"
            hasError={!!(formik.errors.password && formik.touched.password)}
            {...formik.getFieldProps('password')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text="Confirm Password" />
          <Input
            id="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            hasError={
              !!(
                formik.errors.confirmPassword && formik.touched.confirmPassword
              )
            }
            {...formik.getFieldProps('confirmPassword')}
          />
        </InputWrapper>
      </Form>
      <LoginRegisterLink text="Already have an account?" path="/login" />
    </Container>
  )
}

export default Register
