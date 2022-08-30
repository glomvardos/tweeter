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
  createTweet: () => {
    return yup.object({
      description: yup.string().required(),
    })
  },
  createComment: () => {
    return yup.object({
      comment: yup.string().required(),
    })
  },
  updateInformation: (isPasswordNotEmpty: boolean) => {
    return yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().optional(),
      confirmPassword: isPasswordNotEmpty
        ? yup
          .string()
          .oneOf([yup.ref('password') ], 'Passwords must match')
          .required()
        : yup.string().optional(),
    })
  },
}



export default validationSchema

