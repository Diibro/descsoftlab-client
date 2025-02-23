import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

const navLinks = [
     {name:"About", dest:'/about'},
     {name: "Services", dest:'/services'},
     {name:"Contact Us", dest: '/contact-us'},
     {name:"Our works", dest: '/works'}
]

const DeskNavlink = ({link,active}: {link:{name:string,dest:string},active:boolean}) => {
     return (
          <Link href={link.dest} className={` text-[0.8rem] font-bold px-[10px] py-[5px] rounded-[30px] ${active? "bg-main-blue-900 text-main-blue-50 " :"text-main-blue-800"} hover:bg-main-blue-600 hover:text-white transition-all duration-300`} >{link.name}</Link>
     )
}

const MobileNavlink = ({link}: {link:{name:string,dest:string}}) => {
     return (
          <Link href={link.dest} className='text-[0.8rem] text-main-blue-800 w-full border border-white hover:border-main-blue-800 transition-all duration-200 p-[5px] px-[10px] rounded-[30px] ' >{link.name}</Link>
     )
}

const ClientHeader = () => {
     return (
          <>
               <MobileView/>
               <DesktopView />
          </>
     )
}

const MobileView = () => {
     return (
          <header className='w-full z-30 lg:hidden flex items-center justify-between'>
               <Link href={'/'} className='w-auto flex items-center justify-start gap-[10px]'>
                    <Image src={'/logos/logo-rb.png'} width={150} height={150} alt='desc' className='w-[50px] aspect-square rounded-full ' />
                    <h1 className='text-[1rem] text-main-blue-950 font-bold '>Desc Softlab</h1>
               </Link>
               <div className='relative w-auto h-full group'>
                    <i className='cursor-pointer text-main-blue-950 text-[30px]'><IoMenu /></i>
                    <div className='absolute top-full z-50 right-0 hidden group-hover:flex flex-col p-[5px] rounded-[5px] bg-white shadow-sm shadow-main-blue-200 items-center gap-[10px] min-w-[200px] transition-all duration-300 '>
                         {
                              navLinks.map((link, index) => <MobileNavlink  link={link} key={`mobile-nav-link-${index}`} />)
                         }
                         <Link href={'/'} className='text-[0.8rem] px-[20px] py-[5px] border border-main-blue-800 text-main-blue-800 hover:bg-main-blue-800 hover:text-white rounded-[50px] w-full ' >Explore More</Link>
                    </div>
               </div>
          </header>
     )
}

const DesktopView = () => {
     return (
          <header className='w-full hidden lg:flex bg-white p-[10px] max-w-[1512px] mx-auto items-center justify-between '>
               <Link href={'/'} className='w-auto flex items-center justify-start gap-[10px]'>
                    <Image src={'/logos/logo-rb.png'} width={150} height={150} alt='desc' className='w-[50px] aspect-square rounded-full ' />
                    <h1 className='text-[1rem] text-main-blue-950 font-bold '>Desc Softlab</h1>
               </Link>
               <div className='w-auto flex items-center justify-between gap-[10px]'>
                    {
                         navLinks.map((link, index) => <DeskNavlink key={`desktop-nav-link-${index}`} link={link} active={false} />)
                    }
                    <Link className='text-[0.8rem] px-[20px] py-[7.5px] border bg-main-blue-900 text-white hover:bg-main-blue-500 rounded-[50px]  ' href={'/'} >Explore More</Link>
               </div>
          </header>
     )
}

export default ClientHeader