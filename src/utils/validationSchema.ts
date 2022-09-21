import * as yup from 'yup'

const validationSchema = {
  login: () => {
    return yup.object({
      email: yup.string().trim().email().required(),
      password: yup.string().trim().required(),
    })
  },
  register: () => {
    return yup.object({
      firstname: yup.string().trim().required(),
      lastname: yup.string().trim().required(),
      email: yup.string().trim().email().required(),
      password: yup.string().trim().required(),
      confirmPassword: yup
        .string()
        .trim()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required(),
    })
  },
  createTweet: () => {
    return yup.object({
      description: yup.string().trim().required(),
    })
  },
  createComment: () => {
    return yup.object({
      comment: yup.string().trim().required(),
    })
  },
  updateInformation: (isPasswordNotEmpty: boolean) => {
    return yup.object({
      firstname: yup.string().trim().required(),
      lastname: yup.string().trim().required(),
      email: yup.string().trim().email().required(),
      description: yup.string().trim().max(128, 'Description is too long'),
      password: yup.string().trim().optional(),
      confirmPassword: isPasswordNotEmpty
        ? yup
          .string()
          .trim()
          .oneOf([yup.ref('password') ], 'Passwords must match')
          .required()
        : yup.string().optional(),
    })
  },
}

export default validationSchema

