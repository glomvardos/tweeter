import { useState } from 'react'
import RenderIf from '../UI/RenderIf'
import useWidth from '../../hooks/useWidth'

interface Props {
  description: string
}

const TweetDescription = ({ description }:Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const { width } = useWidth()

  const textMaxLength = width! < 640 ? 140 : width! < 1024 ? 250 : 350

  const handleExpand = () => setIsExpanded(prevState => !prevState)

  return (
    <div className='text-primary-text my-5 whitespace-pre-line'>
      <RenderIf isTrue={description.length > textMaxLength && !isExpanded}>
        <p>{description.substring(0, textMaxLength)}...</p>
      </RenderIf>

      <RenderIf isTrue={description.length < textMaxLength || isExpanded }>
        <p>{description}</p>
      </RenderIf>

      <RenderIf isTrue={description.length > textMaxLength}>
        <button onClick={handleExpand} className='my-3 text-sm font-medium text-primary-blue'>
          {isExpanded ? ' Show less' : ' Show more'}
        </button>
      </RenderIf>
    </div>
  )
}

export default TweetDescription
