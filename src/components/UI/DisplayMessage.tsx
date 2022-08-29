interface Props {
  text: string
}

const DisplayMessage = ({ text }:Props) => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-118px)]'>
      <p className='text-primary-text text-xl text-center'>{text}</p>
    </div>
  )
}

export default DisplayMessage
