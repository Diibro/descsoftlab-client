import Link from 'next/link'
import React from 'react'

const ClientFooter = () => {
  return (
     <footer className='w-full bg-main-blue-950 max-w-[1512px] mx-auto flex flex-col items-center p-[20px]'>
          <div className='w-full flex items-center justify-between'>
               <p className='text-white text-[0.9rem]' >&copy; {new Date().getFullYear()} Desc Softlab Ltd. All rights reserved.</p>
               <div className='w-auto flex items-center justify-end gap-[10px]'>
                    <Link href={'/terms'} className='text-white text-[0.9rem]' >Terms </Link>
                    <Link href={'/privacy'} className='text-white text-[0.9rem]' >Privacy Policy</Link>
               </div>
          </div>
     </footer>
  )
}

export default ClientFooter