import { ChildrenTypes } from '../../interfaces/children'

const ContentContainer = ({ children }: ChildrenTypes) => {
  return (
    <section className="px-5 md:px-8 lg:px-16 my-6 max-w-[1400px] w-full mx-auto min-h-full">
      {children}
    </section>
  )
}

export default ContentContainer

