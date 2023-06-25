"use client";
import React, { useState, useEffect} from "react";
import Image from "next/image";
import { heroLG, heroSM, profile } from "@/utils/constants";

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(1025);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(() => window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);

  return (
    <>
      <section className={`h-[30vh] lg:h-[40vh] w-full bg-current`}>
        <Image
          src={ screenWidth > 1024 ? heroLG : heroSM}
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-full'
          alt={"picture of a man enjoying a massage"}
          style={{ objectFit: "cover" }}
        />
      </section>
      <div className='-mt-[7rem] lg:-mt-[14rem] w-[7rem] h-[7rem] sm:w-40 sm:h-40 lg:w-[15rem] lg:h-[15rem] rounded-full overflow-hidden p-1 bg-white border-amber-500 border-2'>
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
