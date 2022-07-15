interface Props {
  text: string;
  onClickHandler: () => void;
  px: string;
  py: string;
}

const Button = ({ text, onClickHandler, px, py }: Props) => {
  return (
    <button
      className={`text-sm font-medium rounded-md bg-primary-blue text-white outline-none hover:opacity-90 transition-opacity ${px} ${py}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  )
}

export default Button

