import { useFormik } from 'formik'
import Logo from '../../components/UI/Logo'
import Container from './components/UI/Container'
import Form from './components/UI/Form'
import Input from './components/UI/Input'
import Label from './components/UI/Label'
import InputWrapper from '../../components/UI/InputWrapper'
import LoginRegisterLink from './components/UI/LoginRegisterLink'
import { RegisterTypes } from '../../interfaces/auth'
import validationSchema from '../../utils/validationSchema'

const Register = () => {
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
    onSubmit: values => {},
  })

  return (
    <Container>
      <Logo />
      <Form display='grid' btnText='Register' title='Register' text='Enter your information'>
        <InputWrapper>
          <Label text='Firstname' />
          <Input
            id='Firstname'
            type='text'
            placeholder='Your Firstname'
            {...formik.getFieldProps('firstname')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text='Lastname' />
          <Input
            id='Lastname'
            type='text'
            placeholder='Your Lastname'
            {...formik.getFieldProps('lastname')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text='Email' />
          <Input id='Email' type='email' placeholder='Your Email' {...formik.getFieldProps('email')} />
        </InputWrapper>
        <InputWrapper>
          <Label text='Password' />
          <Input
            id='Password'
            type='password'
            placeholder='Your Password'
            {...formik.getFieldProps('password')}
          />
        </InputWrapper>
        <InputWrapper>
          <Label text='Confirm Password' />
          <Input
            id='Confirm Password'
            type='password'
            placeholder='Confirm Password'
            {...formik.getFieldProps('confirmPassword')}
          />
        </InputWrapper>
      </Form>
      <LoginRegisterLink text='Already have an account?' path='/login' />
    </Container>
  )
}

export default Register
