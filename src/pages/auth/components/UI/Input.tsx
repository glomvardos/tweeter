interface Props {
  // hasError: boolean
  [key: string]: any
}

const Input = ({ ...restProps }: Props) => {
  return (
    <input
      {...restProps}
      className='text-base rounded-lg px-3 py-[0.625rem] placeholder:text-sm placeholder:text-gray-300 border-[0.0625rem] border-solid border-gray-300 outline-none focus:ountline-none hover:border-primary-blue focus:border-primary-blue focus:shadow-lg transition-all duration-200'
    />
  )
}

export default Input
