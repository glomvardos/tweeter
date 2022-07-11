import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

const NavLink = ({ text, path }: Props) => {
  return <Link to={path}>{text}</Link>;
};

export default NavLink;
