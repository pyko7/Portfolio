'use client'
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'
import { contextDefaultValues } from '@/components/mobileNavbarMenu/_utils'
import { MobileNavbarContextProps } from '@/components/mobileNavbarMenu/_props'

const MobileNavbarContext =
  createContext<MobileNavbarContextProps>(contextDefaultValues)

export const useMobileNavbarContext = () => useContext(MobileNavbarContext)

const MobileNavbarContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <MobileNavbarContext.Provider
      value={{
        open,
        handleClick,
      }}
    >
      {children}
    </MobileNavbarContext.Provider>
  )
}
export default MobileNavbarContextProvider
