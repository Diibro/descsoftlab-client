import Link from 'next/link'
import React from 'react'
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

const ClientFooter = () => {
  return (
    <footer className='w-full bg-main-blue-950 text-gray-300 p-'>
      <div className='w-full mx-auto p-[40px] md:p-[50px]'>
        {/* Main Footer Content */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[40px]'>
          {/* Contact Us Column */}
          <div className='flex flex-col gap-[20px]'>
            <h3 className='text-white text-[1.5rem] font-bold mb-[10px] leading-[1.2]'>Contact us</h3>
            <div className='flex items-center gap-[15px]'>
              <IoMailOutline className='text-blue-400 text-[1.8rem]' />
              <Link target='_blank' href={'mailto:info@descsoftlab.com'} className='text-[1.0rem] leading-[1.5]'>Support: info@descsoftlab.com</Link>
            </div>
            <div className='flex items-center gap-[15px]'>
              <IoCallOutline className='text-blue-400 text-[1.8rem]' />
              <Link href={'https://wa.me/+250780795232'} className='text-[1.0rem] leading-[1.5]'>General: +250780795232</Link>
            </div>
            <div className='flex items-center gap-[15px]'>
              <IoLocationOutline className='text-blue-400 text-[1.8rem]' />
              <span className='text-[1.0rem] leading-[1.5]'>Kigali Office:</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className='flex flex-col gap-[20px]'>
            <h3 className='text-white text-[1.5rem] font-bold mb-[10px] leading-[1.2]'>Quick Links</h3>
            <Link href="/" prefetch={true}  className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Home</Link>
            <Link href="/services" prefetch={true}  className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Services</Link>
            <Link href="/about" prefetch={true}  className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>About Us</Link>
            <Link href="/contact-us" prefetch={true} className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Contact</Link>
          </div>

          {/* Our Services Column */}
          <div className='flex flex-col gap-[20px]'>
            <h3 className='text-white text-[1.4rem] font-bold mb-[10px] leading-[1.2]'>Our Services</h3>
            <Link href="/services" prefetch={true}  className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Web Design & Development</Link>
            <Link href="/services" prefetch={true}  className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Software Development</Link>
            <Link href="/services" prefetch={true}  className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>IT Consulting</Link>
            <Link href="/services" prefetch={true}  className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Data Processing</Link>
            <Link href="/services" prefetch={true}  className='hover:text-blue-400 transition-colors text-[1.0rem] leading-[1.5]'>Digital Marketing</Link>
          </div>

          {/* Follow Us Column */}
          <div className='flex flex-col gap-[20px]'>
            <h3 className='text-white text-[1.4rem] font-bold mb-[10px] leading-[1.2]'>Follow us</h3>
            <Link href="https://www.linkedin.com/company/desc-softlab/" target='_blank' className='flex items-center gap-[15px] hover:text-blue-400 transition-colors'>
              <FaLinkedin className='text-blue-400 text-[1.5rem]' />
              <span className='text-[1.0rem] leading-[1.5]'>LinkedIn</span>
            </Link>
            <Link href="https://www.instagram.com/descsoftlab.official?igsh=Z3R5dmkxZWRmbGUz" target='_blank' className='flex items-center gap-[15px] hover:text-blue-400 transition-colors'>
              <FaInstagram className='text-blue-400 text-[1.5rem]' />
              <span className='text-[1.0rem] leading-[1.5]'>Instagram</span>
            </Link>
            <Link href="https://twitter.com"target='_blank' className='flex items-center gap-[15px] hover:text-blue-400 transition-colors'>
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
            <Link href="/privacy" prefetch={true}  className='text-gray-400 text-[1.0rem] leading-[1.5] hover:text-blue-400 transition-colors'>Privacy Policy</Link>
            <Link href="/terms" prefetch={true}  className='text-gray-400 text-[1.0rem] leading-[1.5] hover:text-blue-400 transition-colors'>Terms Of Services</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ClientFooter