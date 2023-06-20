import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className='h-[30vh] w-full bg-current'>
        <Image
          src='https://res.cloudinary.com/dac48s3os/image/upload/v1687210135/hero_knqeeg.jpg'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-full'
          alt={"picture of a man enjoying a massage"}
          style={{ objectFit: "cover" }}
        />
      </section>
      <div className='top-[11rem] lg:top-[8rem] absolute w-40 h-40 lg:w-[15rem] lg:h-[15rem] rounded-full overflow-hidden'>
        <Image
          src='https://res.cloudinary.com/dac48s3os/image/upload/v1687210148/profile_dnzybg.jpg'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-full object-cover'
          alt={"profile picture"}
        />
      </div>
    </>
  );
};

export default Hero;
