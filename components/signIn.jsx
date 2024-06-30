
  import Link from 'next/link';
import React from 'react';
  
  const SignIn = () => {
    return (
      <Link href="#signin">
        <button
      className=" flex items-center justify-center  border-[1.5px]  border-[#8064a2] rounded-lg  w-full  px-7 pb-2 pt-2    tracking-wide hover:bg-gray-100 "
      >
                             
       <p>Sign in</p>
      </button>
      </Link>
    );
  }
  
  export default SignIn;
  