interface Props {
  text: string;
}

const Label = ({ text }: Props) => {
  return (
    <label htmlFor={text} className="text-gray-500 text-sm font-medium">
      {text}
    </label>
  );
};

export default Label;
