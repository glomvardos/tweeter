import logo from "../../assets/images/tweeter.svg";

interface Props {
  width?: number;
  onClickHandler?: () => void;
}

const Logo = ({ width = 180, onClickHandler }: Props) => {
  return (
    <img
      src={logo}
      alt="logo"
      width={width}
      className={`${onClickHandler ? "cursor-pointer" : "cursor-default"}`}
      onClick={onClickHandler}
    />
  );
};

export default Logo;
