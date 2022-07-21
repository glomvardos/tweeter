import { ChildrenTypes } from '../../interfaces/children'

interface Props extends ChildrenTypes {
  isTrue: boolean
}

const RenderIf = ({ isTrue, children }:Props) => {
  return isTrue ? <>{children}</> : null

}

export default RenderIf
