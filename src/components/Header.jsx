import React from 'react'
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header className='flex justify-between mt-4 items-center px-2'>
        <div className='text-white font-bold text-xl sm:text-2xl'>Surahsnap</div>
        <div> <FaGithub className='text-white text-2xl'/></div>
      </header>
    </div>
  )
}

export default Header