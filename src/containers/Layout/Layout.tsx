import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import ContentContainer from '../../components/UI/ContentContainer'

const Layout = () => {

  return (
    <main className="flex flex-col min-h-full bg-black relative">
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </main>
  )
}

export default Layout

