import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <div className='bg-slate-300/20 h-full'>
    <Navbar />
    <div id='main'>
        <Outlet />
    </div>
    </div>
  )
}

export default Layout