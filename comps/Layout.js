import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
//destructure children which is basically anything inside Layout
const Layout = ({children}) => {
  return (
    <div className="content">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout