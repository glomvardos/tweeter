import * as yup from 'yup'

const validationSchema = {
  login: () => {
    return yup.object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
  },

  register: () => {
    return yup.object({
      firstname: yup.string().required(),
      lastname: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required(),
    })
  },
}

export default validationSchema

