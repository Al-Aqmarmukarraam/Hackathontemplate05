import Link from 'next/link';
import Image from 'next/image';
import { LuPhone } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="bg-dark-50 text-white p-4 h-[48px] w-[1440px] flex
    justify-between items-center pl-[24px] pr-[24px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
      
          <div className='flex items-center'>
          <LuPhone />
            <h6 className="text-[14px]  font-[700] w-36 h-2 ml-1 mb-4 
            leading-[24px]">(225) 555-0118</h6>
         </div>
         <div className='flex items-center w-[260px] h-[44px] gap-[5px] -ml-6'>
         <IoIosMail />
<h6 className='font-[700] text-[14px] gap-[0.5] leading-[24px]'>michelle.rivera@example.com</h6>
         </div>
        </div>

        <div >
          
         <h6 className='text-white font-[700] text-[14px] gap-[0.5] ml-24 leading-[24px]
         space-x-0.5'>Follow Us  and get a chance to win 80% off</h6>
         </div>
        
<div className='flex items-center w-[18px] h-[18px] mr-1 '></div>
<h6 className='font-[700] text-[14px] gap-[0.5] ml-40 leading-[24px]'>Follow Us :</h6>
<FaInstagram />
<FaYoutube  />
<FaFacebook />
<FaTwitter />
         </div></nav>
  )
};
export default Header