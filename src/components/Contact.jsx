import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <div className='contact-items'>
        <div className='contact-items'>
          <IoLogoWhatsapp className='icons' />
          <p className='text'>+44 7948 087756</p>
        </div>
        <div className='contact-items'>
          <MdEmail className='icons' />
          <p className='text'>rohan13k@outlook.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact