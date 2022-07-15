import React from "react";
import { NavLink as Link } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

const NavLink = ({ text, path }: Props) => {
  const activeLinkClass =
    "text-primary-blue border-b-2 rounded-b-[2px] border-b-primary-blue transition-all duration-500";
  return (
    <Link
      to={path}
      className={({ isActive }) =>
        `flex items-center border-t-2 h-full px-5 ${
          isActive ? activeLinkClass : "bg-white border-b-2 border-b-white"
        }`
      }
    >
      {text}
    </Link>
  );
};

export default NavLink;
