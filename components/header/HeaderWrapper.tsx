import MobileNavbarContextProvider from '../mobileNavbarMenu/MobileNavbarContext'
import Header from './Header'

const HeaderWrapper = () => (
  <MobileNavbarContextProvider>
    <Header />
  </MobileNavbarContextProvider>
)

export default HeaderWrapper
