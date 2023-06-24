import React from 'react'
import Infobox from './Infobox';
import Image from 'next/image';
import { calendarURL } from '@/utils/constants';
import { edu_sa } from '@/utils/font';

interface ServiceProps {
    src: string;
    size: string;
    title: string;
    description: string;
    bookingText: string;
    minHeight: boolean;
    maxWidth?: string;
}

const Service: React.FC<ServiceProps> = ({ src, size, title, description, bookingText, minHeight, maxWidth }) => {
  return (
      <Infobox minHeight={minHeight} maxWidth={ maxWidth} backgroundColor="bg-neutral-100">
          <div className={`${size} rounded-full overflow-hidden`}>
            <Image
                src={src}
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-full object-cover'
                alt={"contact-icon"}
            />
          </div>
          <div className="text-center flex flex-col gap-2 mt-[1rem]">
              <h2 className="font-bold text-lg xl:text-xl">{title}</h2>
              <p className="text-sm xl:text-lg">{description}</p>
          </div>
          <div className={`text-md lg:text-xl xl:text-2xl text-center bg-blue-200 hover:bg-[#0a2fc4] hover:text-[white] text-black ${edu_sa.className} mt-[1rem] w-[70%] lg:w-[90%] booking-text rounded-full`}>
              <a href={calendarURL}>{ bookingText}</a>
          </div>
    </Infobox>
  )
}

export default Service