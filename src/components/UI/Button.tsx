import Spinner from './Spinner'

interface Props {
  text: string;
  px: string;
  py: string;
  onClickHandler?: () => void;
  isLoading?: boolean;
}

const Button = ({ text, px, py, onClickHandler, isLoading }: Props) => {
  return (
    <button
      className={`text-sm font-medium rounded-md bg-primary-blue text-white outline-none hover:opacity-90 transition-opacity ${px} ${py}`}
      onClick={onClickHandler}
    >
        {isLoading ? <Spinner /> : text}

    </button>
  )
}

export default Button

