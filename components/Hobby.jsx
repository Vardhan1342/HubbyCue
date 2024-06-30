"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import SignIn from './signIn';
import { RxCross1 } from "react-icons/rx";

const Hobby = () => {
  return (
    <div>
      <Link href="/" className='flex items-center space-x-1' >
                <Image alt="" loading="lazy" width="24" height="24"    src="https://hobbycue.com/_next/static/media/navbar-hobby-icon.35a907be.svg" />
                <span>Hobbies</span>
                <FaAngleDown />
                </Link>
    </div>
  );
}

export default Hobby;
