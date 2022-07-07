import { ChildrenTypes } from '../../interfaces/children'

const InputWrapper = ({ children }: ChildrenTypes) => {
  return <div className='flex flex-col gap-1'>{children}</div>
}

export default InputWrapper
