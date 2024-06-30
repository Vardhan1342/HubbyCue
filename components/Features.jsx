import Image from 'next/image';
import React from 'react';
import { data } from './data';

const Features = () => {
  return (
    <section className='pt-20 mx-24'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {data.map((item)=>{ return <>
         
           <div className={`group hover:bg-[${item.color}] hover:text-white flex flex-col border-[1.5px] p-4 text-left space-y-4 rounded-lg shadow-sm transition-all ease-in-out delay-75`}>
             <h3 className='flex items-center justify-start space-x-2'>
                <Image src={`/${item.logo}`} alt="hel" width="40" height="20" />
                <span className='text-3xl font-bold'>{item.title}</span>
             </h3>
             <p className='text-lg'>{item.description}</p>

             <button className='border-[1.5px] rounded-lg p-2 px-4 text-md text-[#8064a2] border-[#8064a2] group-hover:border-white group-hover:text-white w-fit'>
                 {item.text}
             </button>
          </div>
         </>
        }
    )}

      </section>
    </section>
  );
}

export default Features;
