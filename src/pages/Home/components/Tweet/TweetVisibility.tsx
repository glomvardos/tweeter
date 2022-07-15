import { IoEarth } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import useToggleMenu from "../../../../hooks/useToggleMenu";
import Text from "../UI/Text";
import Divider from "../../../../components/UI/Divider";
import DropdownItem from "../../../../components/Dropdown/DropdownItem";

interface Props {
  tweetVisibility: string;
  setTweetVisibility: React.Dispatch<React.SetStateAction<string>>;
}

const TweetVisibility = ({ tweetVisibility, setTweetVisibility }: Props) => {
  const { isOpen, setIsOpen, ref } = useToggleMenu();

  const onSelectVisibility = (visibility: string) => {
    setTweetVisibility(visibility);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <IoEarth
          size={24}
          className="text-primary-blue hover:opacity-90 transition-opacity cursor-pointer"
        />
        <Text text={tweetVisibility} color="text-primary-blue" pb="pb-0" />
      </div>

      <Dropdown showDropdown={isOpen} style={{ top: "60px" }}>
        <Text text="Who can see this?" color="text-black" />
        <Text text="Choose who can see this tweet" color="text-primary-text" />
        <Divider />
        <DropdownItem
          iconElement={<IoEarth size={20} />}
          text="Everyone"
          onClickHandler={() => onSelectVisibility("Everyone")}
        />
        <DropdownItem
          iconElement={<HiUsers size={20} />}
          onClickHandler={() => onSelectVisibility("People you follow")}
          text="People you follow"
        />
      </Dropdown>
    </div>
  );
};

export default TweetVisibility;
