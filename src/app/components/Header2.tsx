import Link from 'next/link'
import React from 'react'
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

const Header2 = () => {
  return (
    <div className='w-[1440px] h-[64px] bg-white flex items-center justify-between text-balance'>
      <div className='flex items-center justify-between'>
         <h3 className='font-brandName justify-between text-dark-50 font-[700]  text-2xl 
         h-[58px] w-[187px] ml-[38px] mt-5 mr-20 '>Bandage</h3> </div>
      
     <ul className='flex items-center gap-[15px] w-[361px] h-[25px] mt1 mr-50 -ml-72'> 
     <Link className='w-[58px] h-[24px] text-bold font-brandName text-sm text-[700]
     text-gray-500 font-bold hover:text-gray-700' href='/home'>Home</Link>
     <Link className='w-[58px] h-[24px] text-bold font-brandName text-sm text-[700]
     text-gray-500 font-bold hover:text-gray-700' href='/shop'>Shop  </Link> <div className='text-gray-700 -ml-2'></div>
     <Link  className='w-[58px] h-[24px] text-bold font-brandName text-sm text-[700]
     text-gray-500 font-bold hover:text-gray-700'href='/about'>About</Link>
     <Link className='w-[58px] h-[24px] text-bold font-brandName text-sm text-[700]
     text-gray-500 font-bold hover:text-gray-700' href='/blog'>Blog</Link>
     <Link className='w-[58px] h-[24px] text-bold font-brandName text-sm text-[700]
     text-gray-500 font-bold hover:text-gray-700'href='/contact'>Contact</Link>
     <Link  className='w-[58px] h-[24px] text-bold font-brandName text-sm text-[700]
     text-gray-500 font-bold hover:text-gray-700'href='/pages'>Page</Link>
   
     </ul>  
    <CiSearch/>
    <div className='flex gap-2'>
    
 <Link href='/login' className='text-dark-100 text-base font-bold text-[700]
  justify-end text-right -mr-44 ml-10 pl-44 flex items-center gap-2' > 
  <CiUser /> 
  Login / Register </Link>
  
   
</div>
<div className='flex items-center gap-10 mr-10 text-xl'>
<button className='text-dark-100 text-bold flex items-center   '> <FaAngleDown/></button>
<button className='text-dark-100 text-bold flex items-center   '><IoCartOutline/><h6
className='text-xs'>1</h6></button>
<button className='text-dark-100 text-bold flex items-center   '><IoIosHeartEmpty/><h6
className='text-xs'>1</h6></button>
</div>
</div> 
    
  )
}

export default Header2