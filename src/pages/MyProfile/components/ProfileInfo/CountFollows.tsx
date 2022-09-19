
interface Props {
  count: string;
  text: string;
}

const CountFollows = ({ count, text }:Props) => {
  return (
    <div className='flex gap-1 items-center text-sm'>
      <p className='text-white'>{count}</p>
      <p className='text-primary-text'>{text}</p>
    </div>
  )
}

export default CountFollows
