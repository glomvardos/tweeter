import { useFormik } from 'formik'
import Input from './components/UI/Input'
import Label from './components/UI/Label'
import Form from './components/UI/Form'
import InputWrapper from '../../components/UI/InputWrapper'
import Container from './components/UI/Container'
import Logo from '../../components/UI/Logo'
import LoginRegisterLink from './components/UI/LoginRegisterLink'
import { LoginTypes } from '../../interfaces/auth'
import validationSchema from '../../utils/validationSchema'

const Login = () => {
  const initialValues: LoginTypes = {
    email: '',
    password: '',
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema.login,
    onSubmit: values => {},
  })

  return (
    <Container>
      <Logo />
      <Form
        display='flex'
        title='Login'
        text='Enter your credentials to continue'
        btnText='Login'
        onSubmit={formik.handleSubmit}
      >
        <InputWrapper>
          <Label text='Email' />
          <Input id='Email' type='text' placeholder='Your email' {...formik.getFieldProps('email')} />
        </InputWrapper>
        <InputWrapper>
          <Label text='Password' />
          <Input
            id='Password'
            type='password'
            placeholder='Your password'
            {...formik.getFieldProps('password')}
          />
          <LoginRegisterLink text="Don't have an account?" path='/register' />
        </InputWrapper>
      </Form>
    </Container>
  )
}

export default Login
