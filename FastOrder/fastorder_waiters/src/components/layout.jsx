import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
