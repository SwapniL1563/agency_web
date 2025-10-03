import React from 'react'
import Navbar from '../_components/Navbar'
import Contact from '../_components/Contact'
import Footer from '../_components/Footer'

const page = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <Contact/>
            <Footer/>
        </div>
    </div>
  )
}

export default page