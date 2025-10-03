import React from 'react'
import Navbar from '../_components/Navbar'
import Projects from '../_components/Projects'
import Footer from '../_components/Footer'

const page = () => {
  return (
    <div>
        <div>
            <Navbar />
            <Projects/>
            <Footer/>
        </div>
    </div>
  )
}

export default page