import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Slider from './Slider'

function Main() {
  return (
    
    <div className='flex h-screen w-full'>
        <div className='w-1/12'>
            <Navbar />
        </div>
        <div className='w-11/12 overflow-y-auto '>
            <Slider />
            <Home />
        </div>
    </div>
  )
}

export default Main