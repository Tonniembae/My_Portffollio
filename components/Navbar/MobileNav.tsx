import { navItems } from '@/data'
import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
  return (
    <div className='fixed inset-0 z-[1000] bg-dark-100 bg-opacity-70 w-full h-screen'><div className='text-white fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-dark-300 space-x-6 z-[[10000]'>{navItems.map((item) => (
        <Link key={item.name} href={item.link}>
           <p className="navitems text-[20px] ml-12 bordr-[1.5px] pb-2 border-white sm:text-[30px]
           ">{item.name}</p>
        </Link>
    ))}</div></div>
  )
}

export default MobileNav