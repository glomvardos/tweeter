import { ReactElement } from 'react'

interface Props {
  iconElement: ReactElement;
  text: string;
  color?: string;
  onClickHandler?: () => void;
}

const DropdownItem = ({
  color = 'text-primary-text',
  iconElement,
  text,
  onClickHandler,
}: Props) => {
  return (
    <div
      onClick={onClickHandler}
      className={`${color} flex items-center gap-3 p-3 hover:bg-[#F2F2F2] transition-all duration-200 cursor-pointer rounded-lg`}
    >
      {iconElement}
      <p>{text}</p>
    </div>
  )
}

export default DropdownItem

