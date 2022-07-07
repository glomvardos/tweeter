import { ChildrenTypes } from '../../../../interfaces/children'

interface Props extends ChildrenTypes {
  display: 'flex' | 'grid'
  title: string
  text: string
  btnText: string
  [key: string]: any
}

const Form = ({ title, text, btnText, display, children, ...restProps }: Props) => {
  const formDisplay = display === 'flex' ? 'flex flex-col gap-6' : 'grid grid-cols-1 sm:grid-cols-2 gap-8'

  return (
    <form
      {...restProps}
      className='flex flex-col gap-6 shadow-xl rounded-xl p-8 sm:p-16 max-w-[600px] w-full '
    >
      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-black font-bold text-2xl'>{title}</h2>
        <p className='text-center text-gray-400'>{text}</p>
      </div>
      <div className={formDisplay}>
        {children}
        <button
          type='submit'
          className='bg-primary-blue h-[46px] w-full self-end text-white font-medium rounded-lg border-[0.0625rem] border-solid border-transparent hover:bg-white hover:text-primary-blue hover:border-primary-blue hover:shadow-lg focus:bg-white focus:text-primary-blue focus:border-primary-blue focus:shadow-lg focus:outline-none transition-all duration-200'
        >
          {btnText}
        </button>
      </div>
    </form>
  )
}

export default Form
