import logo from '../../assets/images/tweeter.svg'

interface Props {
  width?: number
}

const Logo = ({ width = 180 }: Props) => {
  return <img src={logo} alt='logo' width={width} />
}

export default Logo
