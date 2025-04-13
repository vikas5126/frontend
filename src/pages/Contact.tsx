import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import contactCoverImage from '../assets/images/contact.jpg'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <img src={contactCoverImage} className='w-[100%]' alt="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Contact