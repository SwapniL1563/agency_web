import React from 'react'
import Navbar from '../_components/Navbar'
import About from '../_components/About'
import Footer from '../_components/Footer'

const page = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <About />
            <Footer/>
        </div>
    </div>
  )
}

export default page