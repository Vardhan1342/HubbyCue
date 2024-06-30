import Image from "next/image";
import React from "react";

const AddNew = () => {
  return (
    <section className=" p-16 pt-24 bg-[#f7fdff]">
      <div className="flex flex-col p-6 md:p-10  md:justify-center items-center md:items-start border-[1.5px] rounded-lg bg-white space-y-4">
        <h3 className="flex space-x-2 sm:space-x-4">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 0.333496C7.80001 0.333496 0.333344 7.80016 0.333344 17.0002C0.333344 26.2002 7.80001 33.6668 17 33.6668C26.2 33.6668 33.6667 26.2002 33.6667 17.0002C33.6667 7.80016 26.2 0.333496 17 0.333496ZM23.6667 18.6668H18.6667V23.6668C18.6667 24.5835 17.9167 25.3335 17 25.3335C16.0833 25.3335 15.3333 24.5835 15.3333 23.6668V18.6668H10.3333C9.41668 18.6668 8.66668 17.9168 8.66668 17.0002C8.66668 16.0835 9.41668 15.3335 10.3333 15.3335H15.3333V10.3335C15.3333 9.41683 16.0833 8.66683 17 8.66683C17.9167 8.66683 18.6667 9.41683 18.6667 10.3335V15.3335H23.6667C24.5833 15.3335 25.3333 16.0835 25.3333 17.0002C25.3333 17.9168 24.5833 18.6668 23.6667 18.6668Z"
              fill="#0096C8"
            ></path>
          </svg>
          <span className="text-xl sm:text-2xl  font-bold">Add Your Own</span>
        </h3>
        <p className="text-center md:text-left text-sm md:text-lg text-wrap">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page..
        </p>
        <button className="border-[1.5px] font-bold border-[#8064a2] text-[#8064a2] p-3 px-12 rounded-2xl mt-8 mb-16 w-fit hover:bg-gray-100">
          Add New
        </button>
      </div>
    </section>
  );
};

export default AddNew;
