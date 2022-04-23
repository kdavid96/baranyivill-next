import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className='bg-white'>
        <Header/ >
        {children}
    </div>
  )
}

export default Layout