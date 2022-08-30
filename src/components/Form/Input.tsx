interface Props {
  hasError: boolean;
  [key: string]: any;
}

const Input = ({ hasError, ...restProps }: Props) => {
  return (
    <input
      {...restProps}
      className={`${
        hasError ? 'border-red-500' : 'border-gray-300'
      } w-full text-base rounded-lg px-3 py-[0.625rem] placeholder:text-sm placeholder:text-gray-300 border-[0.0625rem] border-solid outline-none focus:outline-none hover:border-primary-blue focus:border-primary-blue focus:shadow-lg transition-all duration-200`}
    />
  )
}

export default Input

