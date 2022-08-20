import React from 'react'
import { NavLink as Link } from 'react-router-dom'

interface Props {
  text: string;
  path: string;
}

const NavLink = ({ text, path }: Props) => {
  const activeLinkClass =
    'text-primary-blue border-b-2 rounded-b-[2px] border-b-primary-blue transition-all duration-500'
  return (
    <Link
      to={path}
      className={({ isActive }) =>
        `flex items-center border-t-2 border-t-black h-full px-5 ${
          isActive ? activeLinkClass : 'bg-black text-white border-b-2 border-b-black'
        }`
      }
    >
      {text}
    </Link>
  )
}

export default NavLink

