import React from 'react';
import Image from 'next/image';
import { relaxing } from '@/utils/constants';

const ServiceHero = () => {
  return (
      <section className="relative swing-in-top-fwd -z-10">
          <div className="absolute z-0 text-center w-full h-full sm:text-xl lg:text-2xl text-white pt-[12rem] lg:pt-[4rem]">
              <p className="text-center">At Massi Massage <br /> We help you unwind, de-stress, and uplift <br /> your body and mind. </p>
          </div>
          <div className='h-[50vh] lg:h-[35vh] w-[100vw] wavy mb-[5rem] lg:mb-[1rem] absolute -z-10'>
              <div className="absolute bg-[rgb(0,0,0,0.3)] w-full h-full"></div>
            <Image
                src={relaxing}
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-full object-cover'
               alt={"contact-icon"}
            /> 
          </div>
    </section>
  )
}

export default ServiceHero