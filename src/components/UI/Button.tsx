import Spinner from './Spinner'

interface Props {
  text: string;
  width: string;
  height: string;
  onClickHandler?: () => void;
  isLoading?: boolean;
}

const Button = ({ text, width, height, onClickHandler, isLoading }: Props) => {
  return (
    <button
      className={`text-sm font-medium rounded-md bg-primary-blue text-white outline-none hover:opacity-90 transition-opacity ${width} ${height}`}
      onClick={onClickHandler}
    >
      {isLoading ? <Spinner /> : text}

    </button>
  )
}

export default Button

