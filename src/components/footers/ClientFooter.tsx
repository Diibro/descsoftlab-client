import Link from 'next/link'
import React from 'react'

const ClientFooter = () => {
  return (
     <footer className='w-full bg-main-blue-200 max-w-[1512px] mx-auto flex flex-col items-center p-[20px]'>
          <div className='w-full flex items-center justify-between'>
               <p className='text-main-blue-950 text-[0.8rem]' >&copy; 2024 Desc Softlab. All rights reserved</p>
               <Link href={'/'} className='text-main-blue-950 text-[0.8rem]' >Terms & Privacy</Link>
          </div>
     </footer>
  )
}

export default ClientFooter