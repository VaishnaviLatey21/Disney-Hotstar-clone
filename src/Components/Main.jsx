import React from 'react'
import Navbar from './Navbar'
import Home from './Home'

function Main() {
  return (
    <div className='flex h-screen w-full'>
        <div className='w-1/12'>
            <Navbar />
        </div>
        <div className='w-11/12'>
            <Home />
        </div>
    </div>
  )
}

export default Main