"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import SignIn from './signIn';
import { RxCross1 } from "react-icons/rx";
import Explore from './Explore';
import Hobby from './Hobby';



const Navbar = () => {

  const[sidebar,setSide]=useState(false)
  return (
    <header className='px-4 py-2 md:px-0'>
      <nav className='flex items-center justify-between h-[100%]  md:mx-28'>
         <section className='flex items-center gap-x-10'>
              <Link href="/"> 
                  <Image src="https://hobbycue.com/_next/static/media/logo-full.13d59baf.svg"  width="300" height="60" alt="head" className=' hidden md:flex' /> 
                  <Image src="https://hobbycue.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-small.50a121fa.png&w=48&q=75"  width="36" height="60" alt="head" className=' md:hidden flex' /> 
              </Link>

              <div>
                <div className='hidden md:flex relative'>
                  <input type="text" className='bg-gray-200/50 border-[1.5px] w-0 lg:w-[300px] p-2 pr-[50px] text-sm rounded-xl border-[#8064a2] focus:outline-none' placeholder='Search for anything.. '/>
                  <button className='bg-[#8064a2] absolute right-0 px-4 rounded-r-xl cursor-pointer h-full text-white'><CiSearch size="20" /></button>
                </div>
              </div>
         </section>
         <section>
             {/* DeskTop view */}
             <ul className='flex items-center gap-x-8'>

              <li className='hidden md:flex  flex-col items-center group relative'>
                
                <Explore />
              </li>

              <li className=' hidden md:flex items-center'>
                 <Hobby />
              </li>
             <li className='md:hidden flex cursor-pointer'><CiSearch size="25" color='#8064a2' /></li>
              <li className=' group hidden md:flex  justify-end items-center relative'>
                <Link href="/" className='flex items-center space-x-2 ' >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bookmark" class=""><g clip-path="url(#clip0_10705_1996)"><path d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="#8064A2"></path></g><defs><clipPath id="clip0_10705_1996"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                <div className='invisible group-hover:visible bg-white translate-y-4 p-1 rounded-lg -translate-x-4  absolute  -bottom-8 -left-4 '>

                     <h1 className=' text-lg text-[#8064a2] '>  Bookmark</h1>
                </div>
                </Link>
              </li>

              <li className=' group flex  justify-end items-center relative '>
                <Link href="/" className='flex items-center space-x-1 ' >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Notification" class=""><g clip-path="url(#clip0_10705_1999)"><path d="M12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22ZM18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4701 19 19.9201 17.92 19.2901 17.29L18.0001 16Z" fill="#8064A2"></path></g><defs><clipPath id="clip0_10705_1999"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>                <div className='  absolute z-50  w-full -bottom-8 -left-4 '>
                 <div className='invisible group-hover:visible transition-all ease-in-out  bg-white w-fit p-1 -translate-x-[40%] translate-y-4 backdrop:blur-3xl'>

                     <h1 className=' text-lg text-[#8064a2] '>Notification</h1>
                 </div>
                </div>
                </Link>
              </li>

              <li className=' hidden md:flex group  justify-end items-center relative  '>
                <Link href="/" className='flex items-center space-x-1 ' >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Cart" class=""><path d="M21.9201 7.25002V7.38002L20.4601 12.78C20.2875 13.421 19.9073 13.9866 19.3789 14.3883C18.8505 14.79 18.2038 15.0051 17.5401 15H9.89007C9.13906 15.0031 8.41423 14.7243 7.85877 14.2189C7.30332 13.7134 6.95765 13.018 6.89007 12.27L6.24007 4.91002C6.21754 4.6607 6.10232 4.4289 5.91717 4.26041C5.73202 4.09192 5.4904 3.99901 5.24007 4.00002H3.07007C2.80485 4.00002 2.5505 3.89467 2.36296 3.70713C2.17543 3.51959 2.07007 3.26524 2.07007 3.00002C2.07007 2.73481 2.17543 2.48045 2.36296 2.29292C2.5505 2.10538 2.80485 2.00002 3.07007 2.00002H5.24007C5.99107 1.99698 6.71591 2.27572 7.27136 2.78118C7.82682 3.28665 8.17248 3.98206 8.24007 4.73002V5.00002H19.9301C20.2151 4.99779 20.4974 5.05652 20.7579 5.17228C21.0184 5.28805 21.2512 5.45816 21.4406 5.67124C21.63 5.88431 21.7716 6.1354 21.8561 6.4077C21.9405 6.67999 21.9657 6.96718 21.9301 7.25002H21.9201Z" fill="#8064A2"></path><path d="M9.07007 22C10.4508 22 11.5701 20.8807 11.5701 19.5C11.5701 18.1193 10.4508 17 9.07007 17C7.68936 17 6.57007 18.1193 6.57007 19.5C6.57007 20.8807 7.68936 22 9.07007 22Z" fill="#8064A2"></path><path d="M17.0701 22C18.4508 22 19.5701 20.8807 19.5701 19.5C19.5701 18.1193 18.4508 17 17.0701 17C15.6894 17 14.5701 18.1193 14.5701 19.5C14.5701 20.8807 15.6894 22 17.0701 22Z" fill="#8064A2"></path></svg>                
                <div className='invisible  group-hover:visible transition-all ease-in-out  bg-white border-1 border-gray-100 rounded-md p-1 -translate-x-[60%] translate-y-10 backdrop:blur-3xl '>

                     <h1 className=' text-lg text-[#8064a2]'>  Cart</h1>
                </div>
                </Link>
              </li>

              <li className='md:flex hidden'>
                 <SignIn />
              </li>
              
              {/* menu button Mobile View  */}
              <section className='md:hidden relative overflow-'>
                  {!sidebar &&
                  <div className='mr-4 ' onClick={()=>{setSide(true)}}>
                    <CiMenuBurger size="30" className='cursor-pointer' />
                  </div>
                  }

                  {sidebar &&<div
                  className='z-50  bg-white fixed w-2/3 h-[120vh]  -translate-x-[60vw]  top-0'
                  >
                          <div className='flex flex-col p-4'>
                            
                            <div
                            onClick={()=>{setSide(false)}} 
                            className='w-fit flex border-2 border-[#8064a2] rounded-lg p-1 cursor-pointer hover:bg-gray-100'>

                              <RxCross1 size="30" color="#8064a2" />
                            </div>

                            <div className=' mx-4 mt-4 ' onClick={()=>{setSide(false)}}>
                              <SignIn />
                            </div>
                            <div className='w-full flex flex-col space-y-4 mt-8'>
                               <Explore />
                               <Hobby />
                            </div>
                          </div>
                    </div>}
              </section>
              
             </ul>
         </section>
      </nav>
    </header>
  );
}

export default Navbar;


