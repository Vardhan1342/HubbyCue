"use client"
import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const Footer = () => {
  const [DropdownOne, setDropdownOne] = useState(false);
  const [DropdownTwo, setDropdownTwo] = useState(false);
  const [DropdownThree, setDropdownThree] = useState(false);
  return (
    <section className=''>
      <div className='py-12 mx-8 lg:mx-20'>
        <div className='flex flex-col lg:flex-row justify-between w-full'>
          <div className='flex flex-col lg:flex-row justify-between items-stretch space-y-8 lg:space-y-0 lg:space-x-32'>
            <div className='block'>
            <div className='flex justify-between items-center  w-full'>

                <p className='text-2xl font-bold mb-4'>Hobby Cue</p>
                <div className='md:hidden' onClick={()=>{setDropdownOne(!DropdownOne)}} >
                   
                   {DropdownOne? <FaAngleUp />:<FaAngleDown />}
                </div>
              </div>
              <ul className={`${DropdownOne ? "flex flex-col":"hidden md:flex md:flex-col"} md:visible space-y-2 text-gray-700 transition-all ease-in-out`}>
                <li className='hover:text-gray-900 cursor-pointer'>About Us</li>
                <li className='hover:text-gray-900 cursor-pointer'>Our Services</li>
                <li className='hover:text-gray-900 cursor-pointer'>Work with us</li>
                <li className='hover:text-gray-900 cursor-pointer'>FAQ</li>
                <li className='hover:text-gray-900 cursor-pointer'>Contact Us</li>
              </ul>
            </div>
            <div>
            <div className='flex justify-between items-center  w-full'>

                <p className='text-2xl font-bold mb-4'>How do I</p>
                <div className='md:hidden' onClick={()=>{setDropdownTwo(!DropdownTwo)}} >
                   
                   {DropdownTwo? <FaAngleUp />:<FaAngleDown />}
                </div>
              </div>
              <ul className={`${DropdownTwo ? "flex flex-col":"hidden md:flex md:flex-col"} md:visible space-y-2 text-gray-700 transition-all ease-in-out`}>
                <li className='hover:text-gray-900 cursor-pointer'>Sign Up</li>
                <li className='hover:text-gray-900 cursor-pointer'>Add a Listing</li>
                <li className='hover:text-gray-900 cursor-pointer'>Claim Listing</li>
                <li className='hover:text-gray-900 cursor-pointer'>Post a Query</li>
                <li className='hover:text-gray-900 cursor-pointer'>Add a Blog Post</li>
                <li className='hover:text-gray-900 cursor-pointer'>Other Queries</li>
              </ul>
            </div>
            <div>
              <div className='flex justify-between items-center  w-full'>
                <p className='text-2xl font-bold mb-4'>Quick Links</p>
                <div className='md:hidden' onClick={()=>{setDropdownThree(!DropdownThree)}} >
                   
                   {DropdownThree? <FaAngleUp />:<FaAngleDown />}
                </div>
              </div>
              <ul className={`${DropdownThree ? "flex flex-col":"hidden md:flex md:flex-col"} md:visible space-y-2 text-gray-700 transition-all ease-in-out`}>
                <li className='hover:text-gray-900 cursor-pointer'>Listing Pages</li>
                <li className='hover:text-gray-900 cursor-pointer'>Blog Posts</li>
                <li className='hover:text-gray-900 cursor-pointer'>Shop / Store</li>
                <li className='hover:text-gray-900 cursor-pointer'>Community</li>
                <li className='hover:text-gray-900 cursor-pointer'>Sitemap</li>
              </ul>
            </div>
          </div>
          <div className='mt-8 lg:mt-0 lg:ml-10'>
            <div className=''>
              <p className='text-2xl font-bold mb-4'>Invite Friends</p>
              <div className='flex relative'>
                <input type="text" className='border-[1.5px] w-full lg:w-[400px] p-3 pr-[70px] text-sm rounded-xl border-[#8064a2] focus:outline-none' placeholder='Email Id '/>
                <button className='bg-[#8064a2] absolute right-0 px-4 rounded-r-xl cursor-pointer h-full text-white'>Invite</button>
              </div>
              <div>
                 <p className='text-2xl font-bold mt-6 mb-4'>Social Media</p>
                 <div className='flex items-center space-x-4'>
                
                    <a href='#'><img src='https://hobbycue.com/_next/static/media/facebook.79574a87.svg' alt='twitter' className='w-8 h-8'/></a>
                    <a href='#'><img src='https://hobbycue.com/_next/static/media/X.e46b68ce.svg' alt='facebook' className='w-8 h-8'/></a>
                    <a href='#'><img src='https://hobbycue.com/_next/static/media/instagram.bda0a5c3.svg' alt='twitter' className='w-8 h-8'/></a>
                    <a href='#'><img src='https://hobbycue.com/_next/static/media/Pinterest.65ac81f3.svg' alt='twitter' className='w-8 h-8'/></a>
                    <a href='#'><img src='https://hobbycue.com/_next/static/media/LinkedIn.e984a9f0.svg' alt='twitter' className='w-8 h-8'/></a>
                    <a href='#'><img src='https://hobbycue.com/_next/static/media/youtube.854f0241.svg' alt='twitter' className='w-8 h-8'/></a>
                    <a href='#'><img src='https://hobbycue.com/_next/static/media/telegram.62f6b3d4.svg' alt='twitter' className='w-8 h-8'/></a>
                    <a href='#'><img src='https://hobbycue.com/_next/static/media/Message.19936437.svg' alt='twitter' className='w-8 h-8'/></a>
 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className='w-full h-20 pt-4 bg-gray-50 text-center mt-12 text-gray-600'>© Purple Cues Private Limited</div>
    </section>
  );
}

export default Footer;
