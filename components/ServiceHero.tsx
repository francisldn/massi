import React from 'react';
import Image from 'next/image';
import { relaxing } from '@/utils/constants';

const ServiceHero = () => {
  return (
      <section>
          <div className='h-[50vh] lg:h-[30vh] w-[100vw] wavy mb-[5rem] lg:mb-[1rem] absolute'>
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