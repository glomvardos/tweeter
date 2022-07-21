import moment from 'moment'

interface Props {
  firstname: string
  lastname:string
  createdAt: string
}

const TweetUserDetails = ({ firstname, lastname, createdAt }:Props) => {
  return (
    <div className='ml-[18px] flex flex-col font-medium'>
      <p>{`${firstname} ${lastname}`}</p>
      <p className='text-[#BDBDBD]'>{moment(createdAt).format('DD MMMM HH:mm')}</p>
    </div>
  )
}

export default TweetUserDetails
