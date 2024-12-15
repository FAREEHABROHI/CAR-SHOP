import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='h-[124px] w-[1440px] border-2 border-gray mt-8'>
        
    
    <div className="w-[148px] h-[44px] absolute top-[48px] left-[60px] ">
        <img src='/Logo.png'
        alt='logo'
        width={148}
        height={44}>
        
        </img>

    </div>
        <div className='flex items-center justify-center w-full pt-9'>
        <div className='hidden lg:flex items-center bg-slate-200 rounded-md px-3 py-2 w-[492px] h-[44px] top-[40px] left-[272px] '>
        <CiSearch className='w-24px h-24px top-50 left-[229px]' />
            <input type="text"
              
            placeholder='search something here' 
            className='bg-slate-300 outline-none border-2 bg-slate-300'/>
            
           
        </div>
        <div className='flex place-items-end  space-x-6 p-10 align-top -inset-4 w-[px] h-[44px] top-[40px] left-[1172px] gap-10'>
        <FaHeart className='bg-white-500 ' />
        <CiBellOn className='bg-white-500' />
        <IoMdSettings className='bg-white-400' />
    
        </div>
    
        <img src='/pic.png ' 
        height={44} 
        width={44}
        className='rounded-lg ml-4 left-[192]'
        
        
        ></img>
        </div>
       





    </header>
  )
}

export default Navbar
