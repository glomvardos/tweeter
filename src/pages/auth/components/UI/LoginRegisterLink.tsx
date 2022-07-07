import { Link } from 'react-router-dom'

interface Props {
  text: string
  path: string
}

const LoginRegisterLink = ({ text, path }: Props) => {
  return (
    <p className='text-right text-sm text-gray-500'>
      {text}{' '}
      <Link to={path} className='capitalize text-primary-blue'>
        {path.replace('/', '')}
      </Link>
    </p>
  )
}

export default LoginRegisterLink
