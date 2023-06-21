import React from "react";
import Image from "next/image";
import { hero, profile } from "@/utils/constants";

const Hero = () => {
  return (
    <>
      <section className='h-[30vh] w-full bg-current'>
        <Image
          src={ hero}
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-full'
          alt={"picture of a man enjoying a massage"}
          style={{ objectFit: "cover" }}
        />
      </section>
      <div className='top-[8rem] lg:top-[5rem] absolute w-40 h-40 lg:w-[15rem] lg:h-[15rem] rounded-full overflow-hidden p-1 bg-white border-amber-500 border-2'>
        <div className="rounded-full w-full h-full overflow-hidden">
          <Image
            src={ profile}
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-full object-cover'
            alt={"profile picture"}
          />
        </div>
       
      </div>
    </>
  );
};

export default Hero;
