"use client"
import { SessionProvider } from "next-auth/react"


const GoogleProviders = ({children}) => {
  return (
    <SessionProvider>
    {children}
    </SessionProvider>
  )
}

export default GoogleProviders