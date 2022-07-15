interface Props {
  imgSrc: string;
}

const ProfileIcon = ({ imgSrc }: Props) => {
  return <img src={imgSrc} alt="" />
}

export default ProfileIcon

