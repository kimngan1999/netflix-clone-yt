import React, { useState, useEffect } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'


function Header() {
  const [isScrolled, setIsCrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () =>{
        if (window.scrollY > 0){
          setIsCrolled(true)
        } else{
          setIsCrolled(false)
        }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <header className={`${isScrolled && 'bg-[#000000]'}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLinks'>Home</li>
          <li className='headerLinks'>TV Shows</li>
          <li className='headerLinks'>Movies</li>
          <li className='headerLinks'>New & Popular</li>
          <li className='headerLinks'>My List</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 text-sm font-light'>      
        <SearchIcon className='hidden h-6 w-6 sm:inline'/>
        <p className='hidden lg:inline'>Name</p>
        <BellIcon className='h-6 w-6 '></BellIcon>
        <Link href="/account">
        <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header