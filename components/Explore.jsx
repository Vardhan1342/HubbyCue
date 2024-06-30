"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import SignIn from './signIn';
import { RxCross1 } from "react-icons/rx";
const list=[
    "People - Community",
    "Places - Venues",
    "Programs - Events",
    "Products - Store",
    "Posts - Write-ups"
  ]
const Explore = () => {
    const [show,setShow]=useState(false);
  return (
    <div>
      <Link href="/" className='flex items-center gap-x-2' >
                <Image alt="" loading="lazy" width="24" height="24"    src="https://hobbycue.com/_next/static/media/navbar-explore-icon.0cdba9a4.svg" />
                <span>Explore</span>
                <FaAngleDown className=''  onClick={()=>{setShow(!show)}} />
      </Link>
                {show&&
                <div className=' md:invisible group-hover:visible md:w-fit bg-white text-black md:absolute top-12'>
                          <ul className='flex flex-col items-center md:divide-y-2 w-full p-2 leading-10'>
                            {list.map(item=>{return <li className='text-nowrap'>{item}</li>})}
                          </ul>
                </div>
                }
    </div>
  );
}

export default Explore;
