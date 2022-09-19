import { ReactNode } from 'react'
import Spinner from './Spinner'

interface Props  {
  children?: ReactNode
  text: string;
  width: string;
  height: string;
  onClickHandler?: () => void;
  isLoading?: boolean;
}

const Button = ({ children, text, width, height, onClickHandler, isLoading }: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-1 text-sm font-medium rounded-md bg-primary-blue text-white outline-none hover:opacity-90 transition-opacity ${width} ${height}`}
      onClick={onClickHandler}
    >
      {children}
      {isLoading ? <Spinner /> : text}

    </button>
  )
}

export default Button

