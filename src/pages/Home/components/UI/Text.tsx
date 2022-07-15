import React from 'react'

interface Props {
  text: string;
  color: 'text-primary-text' | 'text-black' | 'text-primary-blue';
  pb?: string;
}

const Text = ({ text, color, pb = 'pb-2' }: Props) => {
  return <p className={` font-semibold text-sm ${color} ${pb}`}>{text}</p>
}

export default Text

