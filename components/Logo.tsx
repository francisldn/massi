import React from 'react';
import Image from 'next/image';
import { logo } from '@/utils/constants';

const Logo = () => {
  return (
    <div className="absolute top-4 left-[1.5rem] lg:left-[2rem] w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] rounded-full overflow-hidden bg-white">
          <Image
            src={logo}
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-full bg-transparent'
            alt={"picture of a man enjoying a massage"}
            style={{ objectFit: 'contain' }}
          />
        </div>
  )
}

export default Logo