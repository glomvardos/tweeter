import { ChildrenTypes } from '../../../interfaces/children'

interface Props extends ChildrenTypes {
  text: string
  onClickHandler: () => void
  textColor?: string
}

const TweetAction = ({ children, text, textColor = 'text-primary-text', onClickHandler }:Props) => {
  return (
    <button onClick={onClickHandler} className={`${textColor} flex justify-center items-center h-10 rounded-lg bg-transparent gap-3  font-medium w-1/4 hover:bg-black transition-all duration-200`}>
      {children}
      <span className='hidden sm:inline-block'>{text}</span>
    </button>
  )
}

export default TweetAction
