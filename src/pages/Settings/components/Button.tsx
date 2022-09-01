
interface Props {
  text: string;
  color: 'bg-red-600' | 'bg-primary-blue';
  type: 'submit' | 'button';
  onClickHandler?: () => void;
}
const Button = ({ text, type, color, onClickHandler } : Props) => {
  return (
    <button
      type={type}
      onClick={onClickHandler}
      className={`${color} text-lg font-medium text-white rounded-lg py-[9px] hover:opacity-90 transition-opacity duration-200`}
    >
      {text}
    </button>
  )
}

export default Button
