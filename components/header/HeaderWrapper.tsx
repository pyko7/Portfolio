import MobileNavbarContextProvider from '@/components/mobileNavbarMenu/MobileNavbarContext'
import Header from '@/components/header/Header'

const HeaderWrapper = () => (
  <MobileNavbarContextProvider>
    <Header />
  </MobileNavbarContextProvider>
)

export default HeaderWrapper
