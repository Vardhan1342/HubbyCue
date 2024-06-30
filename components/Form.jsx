"use client";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const Form = ({ signin, text }) => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
        <p className="mx-4 mb-0 text-center font-semibold ">
          Or {text} in with
        </p>
      </div>

      {/* Email */}

      <div className="relative mb-6">
        <input
          type="text"
          className="peer block min-h-[auto] w-full  border-2 rounded-lg bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary "
          id="email"
        />
        <label
          for="email"
          className=" absolute z-50 left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
        >
          Email address
        </label>
      </div>

      {/* password */}

      <div className="relative mb-6 flex ">
        <input
          type={show ? "text" : "password"}
          className=" block min-h-[auto] w-full  border-2 rounded-lg bg-white px-3 py-[0.32rem] leading-[2.15] outline-none  "
          id="password"
          placeholder="password"
        />
        <button
          className="absolute right-2 top-2"
          onClick={() => {
            setShow(!show);
          }}
        >
          {!show ? <FaRegEyeSlash size={25} /> : <IoEyeOutline size={25} />}
        </button>
      </div>
      {signin ? (
        <>
          <div className="mb-6 flex items-center justify-between">
            {/* <!-- Remember me checkbox --> */}
            <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
              <input
                className="w-6 h-4 mt-2"
                type="checkbox"
                id="exampleCheck2"
              />
              <label
                className="inline-block ps-[0.15rem] hover:cursor-pointer"
                for="exampleCheck2"
              >
                Remember me
              </label>
            </div>

            {/* <!--Forgot password link--> */}
            <a href="#!">Forgot password?</a>
          </div>
        </>
      ) : (
        <div className="text-center pb-6">
          <p className="text-gray-400 text-sm">
            By continuing, you agree to our{" "}
            <span className="text-black">Terms of Service </span> and{" "}
            <span className="text-black">Privacy Policy</span>.{" "}
          </p>
        </div>
      )}
      <button
        type="button"
        className="mb-10 bg-[#8064a2] rounded-lg inline-block w-full  px-7 pb-2 pt-2 text-sm font-medium uppercase tracking-wide text-white    f focus:outline-none "
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        {signin ? "continue" : "Agree and Contiue"}
      </button>
    </section>
  );
};

export default Form;
