
interface Props {
  text: string;
  color: 'bg-red' | 'bg-primary-blue';
  type: 'submit' | 'button';
}
const Button = ({ text, type, color } : Props) => {
  return (
    <button type={type} className={`${color} text-lg font-medium text-white rounded-lg py-[9px] hover:opacity-90 transition-opacity duration-200`} >
      {text}
    </button>
  )
}

export default Button
