import React from 'react'
import Image from 'next/image';

const Icon: React.FC<{ src: string; size: string; link?:string }> = ({ src, size, link}) => {
  return (
    <div className={size}>
      <a href={ link} target="_blank" rel="noreferrer noopener">
          <Image
            src={ src}
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-full object-fit'
            alt={"contact-icon"}
          />
        </a>
    </div>
  )
}

export default Icon