"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { IoMenu } from 'react-icons/io5'

const navLinks = [
     {name:"About", dest:'/about'},
     {name: "Services", dest:'/services'},
     {name:"Contact Us", dest: '/contact-us'},
     {name:"Our works", dest: '/works'}
]



const MobileNavlink = ({link}: {link:{name:string,dest:string}}) => {
     return (
          <Link href={link.dest} className='text-[1.2rem] text-main-blue-800 w-full border border-white hover:border-main-blue-800 transition-all duration-200 p-[5px] px-[10px] rounded-[30px] '>{link.name}</Link>
     )
}

const ClientHeader = () => {
     const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 50) {
                    setScrolled(true);
               } else {
                    setScrolled(false);
               }
          };

          window.addEventListener('scroll', handleScroll);
          
          // Clean up the event listener
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     return (
          <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-[#1c2c3c]'}`}>
               <div className="max-w-[1512px] mx-auto">
                    <MobileView scrolled={scrolled} />
                    <DesktopView scrolled={scrolled} />
               </div>
          </div>
     )
}

const MobileView = ({ scrolled }: { scrolled: boolean }) => {
     return (
          <header className={`w-full z-30 lg:hidden flex items-center justify-between p-[15px] transition-all duration-300 ${scrolled ? 'py-[10px]' : 'py-[15px]'}`}>
               <Link href={'/'} className='w-auto flex items-center justify-start gap-[10px]'>
                    <Image src={'/logos/logo-rb.png'} width={150} height={150} alt='desc' className='w-[50px] aspect-square rounded-full ' />
                    <h1 className={`text-[1.2rem] font-bold transition-colors duration-300 ${scrolled ? 'text-main-blue-950' : 'text-white'}`}>Desc Softlab</h1>
               </Link>
               <div className='relative w-auto h-full group'>
                    <i className={`cursor-pointer text-[30px] transition-colors duration-300 ${scrolled ? 'text-main-blue-950' : 'text-white'}`}><IoMenu /></i>
                    <div className='absolute top-full z-50 right-0 hidden group-hover:flex flex-col p-[5px] rounded-[5px] bg-white shadow-sm shadow-main-blue-200 items-center gap-[10px] min-w-[200px] transition-all duration-300 '>
                         {
                              navLinks.map((link, index) => <MobileNavlink link={link} key={`mobile-nav-link-${index}`} />)
                         }
                         <Link href={'/'} className='text-[1.2rem] px-[20px] py-[5px] border border-main-blue-800 text-main-blue-800 hover:bg-main-blue-800 hover:text-white rounded-[50px] w-full ' >Explore More</Link>
                    </div>
               </div>
          </header>
     )
}

const DesktopView = ({ scrolled }: { scrolled: boolean }) => {
     return (
          <header className={`w-full hidden lg:flex p-[10px] max-w-[1512px] mx-auto items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white py-[10px]' : 'bg-[#1c2c3c] py-[20px]'}`}>
               <Link href={'/'} className='w-auto flex items-center justify-start gap-[10px]'>
                    <Image src={'/logos/logo-rb.png'} width={150} height={150} alt='desc' className='w-[50px] aspect-square rounded-full ' />
                    <h1 className={`text-[1.2rem] font-bold transition-colors duration-300 ${scrolled ? 'text-main-blue-950' : 'text-white'}`}>Desc Softlab</h1>
               </Link>
               <div className='w-auto flex items-center justify-between gap-[10px]'>
                    {
                         navLinks.map((link, index) => (
                              <Link 
                                   href={link.dest} 
                                   key={`desktop-nav-link-${index}`} 
                                   className={`text-[1.2rem] font-bold px-[10px] py-[7.5px] rounded-[30px] transition-all duration-300 ${
                                        scrolled 
                                             ? "hover:bg-main-blue-600 hover:text-white text-main-blue-800" 
                                             : "hover:bg-white/20 hover:text-white text-white"
                                   }`}
                              >
                                   {link.name}
                              </Link>
                         ))
                    }
                    <Link 
                         className={`text-[1.2rem] px-[20px] py-[7.5px] border rounded-[50px] transition-all duration-300 ${
                              scrolled 
                                   ? 'bg-main-blue-900 text-white hover:bg-main-blue-500 border-main-blue-900' 
                                   : 'bg-transparent text-white hover:bg-white hover:text-main-blue-900 border-white'
                         }`} 
                         href={'/'} 
                    >
                         Explore More
                    </Link>
               </div>
          </header>
     )
}

export default ClientHeader