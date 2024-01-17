import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from './components/Loading'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <div className='bg-slate-300/20 h-full'>
      <Suspense fallback={<Loading />}>

    <Navbar />
    <div id='main'>
        <Outlet />
    </div>

    </Suspense>
    </div>
  )
}

export default Layout