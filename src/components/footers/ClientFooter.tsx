import Link from 'next/link'
import React from 'react'
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

const ClientFooter = () => {
  return (
    <footer className='w-full bg-[#1c2c3c] text-gray-300 p-'>
      <div className='w-full mx-auto p-[40px] md:p-[50px]'>
        {/* Main Footer Content */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[40px]'>
          {/* Contact Us Column */}
          <div className='flex flex-col gap-[20px]'>
            <h3 className='text-white text-[1.5rem] font-bold mb-[10px] leading-[1.2]'>Contact us</h3>
            <p className='text-gray-400 text-[1.0rem] leading-[1.5]'>Desc Softlab</p>
            <div className='flex items-center gap-[15px]'>
              <IoMailOutline className='text-blue-400 text-[1.8rem]' />
              <span className='text-[1.0rem] leading-[1.5]'>Support: descsoft@gmail.com</span>
            </div>
            <div className='flex items-center gap-[15px]'>
              <IoCallOutline className='text-blue-400 text-[1.8rem]' />
              <span className='text-[1.0rem] leading-[1.5]'>General: +250792548195</span>
            </div>
            <div className='flex items-center gap-[15px]'>
              <IoLocationOutline className='text-blue-400 text-[1.8rem]' />
              <span className='text-[1.0rem] leading-[1.5]'>Kigali Office:</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className='flex flex-col gap-[20px]'>
            <h3 className='text-white text-[1.5rem] font-bold mb-[10px] leading-[1.2]'>Quick Links</h3>
            <p className='text-gray-400 text-[1.0rem] leading-[1.5]'>Desc Softlab</p>
            <Link href="/" className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Home</Link>
            <Link href="/services" className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Services</Link>
            <Link href="/about-us" className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>About Us</Link>
            <Link href="/contact" className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Contact</Link>
          </div>

          {/* Our Services Column */}
          <div className='flex flex-col gap-[20px]'>
            <h3 className='text-white text-[1.5 rem] font-bold mb-[10px] leading-[1.2]'>Our Services</h3>
            <p className='text-gray-400 text-[1.0rem] leading-[1.5]'>Desc Softlab</p>
            <Link href="/services/web-design" className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Web Design & Development</Link>
            <Link href="/services/software" className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Software Development</Link>
            <Link href="/services/consulting" className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>IT Consulting</Link>
            <Link href="/services/data" className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Data Processing</Link>
            <Link href="/services/marketing" className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Digital Marketing</Link>
          </div>

          {/* Follow Us Column */}
          <div className='flex flex-col gap-[20px]'>
            <h3 className='text-white text-[1.5rem] font-bold mb-[10px] leading-[1.2]'>Follow us</h3>
            <p className='text-gray-400 text-[1.0rem] leading-[1.5]'>Desc Softlab</p>
            <Link href="https://linkedin.com" className='flex items-center gap-[15px] hover:text-blue-400 transition-colors'>
              <FaLinkedin className='text-blue-400 text-[1.5rem]' />
              <span className='text-[1.0rem] leading-[1.5]'>LinkedIn</span>
            </Link>
            <Link href="https://instagram.com" className='flex items-center gap-[15px] hover:text-blue-400 transition-colors'>
              <FaInstagram className='text-blue-400 text-[1.5rem]' />
              <span className='text-[1.0rem] leading-[1.5]'>Instagram</span>
            </Link>
            <Link href="https://twitter.com" className='flex items-center gap-[15px] hover:text-blue-400 transition-colors'>
              <FaTwitter className='text-blue-400 text-[1.5rem]' />
              <span className='text-[1.0rem] leading-[1.5]'>Twitter</span>
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div className='w-full h-[1px] bg-gray-700 mb-[20px]'></div>

        {/* Copyright Section */}
        <div className='w-full flex flex-col md:flex-row md:items-center md:justify-between gap-[15px]'>
          <p className='text-gray-400 text-[1.0rem] leading-[1.5]'>© 2024 Desc Softlab. All rights reserved.</p>
          <div className='flex items-center gap-[20px]'>
            <Link href="/privacy" className='text-gray-400 text-[1.0rem] leading-[1.5] hover:text-blue-400 transition-colors'>Privacy Policy</Link>
            <Link href="/terms" className='text-gray-400 text-[1.0rem] leading-[1.5] hover:text-blue-400 transition-colors'>Terms Of Services</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ClientFooter