import { ChildrenTypes } from "../../interfaces/children";

interface Props extends ChildrenTypes {
  showDropdown: boolean;
}

const Dropdown = ({ showDropdown, children }: Props) => {
  const showDropdownClass = showDropdown ? "opacity-100" : "opacity-0";

  return (
    <div
      className={` bg-white absolute z-10 w-[200px] top-[80px] right-0 shadow-md rounded-xl p-4 ${showDropdownClass} transition-opacity duration-200`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
