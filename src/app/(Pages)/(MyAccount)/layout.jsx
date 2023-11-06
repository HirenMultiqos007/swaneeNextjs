import MyAccountLayout from '@/app/components/Layout/MyaccountLayout'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
    <MyAccountLayout>{children}</MyAccountLayout>
    </>
  )
}

export default Layout