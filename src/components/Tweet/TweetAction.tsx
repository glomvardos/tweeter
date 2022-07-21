import { ChildrenTypes } from '../../interfaces/children'

interface Props extends ChildrenTypes {
  text: string
  onClickHandler: () => void
}

const TweetAction = ({ children, text, onClickHandler }:Props) => {
  return (
    <button onClick={onClickHandler} className='flex justify-center items-center h-10 rounded-lg bg-transparent gap-3  font-medium text-primary-text w-1/4 hover:bg-[#F2F2F2] transition-all duration-200 '>
      {children}
      <span className='hidden sm:inline-block'>{text}</span>
    </button>
  )
}

export default TweetAction
