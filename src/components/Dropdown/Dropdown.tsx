import { ChildrenTypes } from "../../interfaces/children";

interface Props extends ChildrenTypes {
  showDropdown: boolean;
  style?: Style;
}

interface Style {
  [key: string]: string;
}

const Dropdown = ({ showDropdown, style, children }: Props) => {
  const showDropdownClass = showDropdown
    ? "opacity-100 scale-100"
    : "opacity-0 scale-0";

  return (
    <div
      style={style}
      className={`w-max min-w-[200px] bg-white absolute z-10 shadow-md rounded-xl p-4 ${showDropdownClass} origin-top transition-all duration-500 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
