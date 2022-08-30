interface Props {
  text: string;
}

const PageTitle = ({ text }:Props) => {
  return (
    <h2 className='text-primary-text my-10 text-4xl'>
      {text}
    </h2>
  )
}

export default PageTitle
