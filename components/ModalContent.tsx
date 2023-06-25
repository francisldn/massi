import React from "react";
import { edu_sa, fuzzy_bubbles } from "../utils/font";
import Icon from "./Icon";
import { calendarURL, email, promo1, promo2 } from "@/utils/constants";
import Image from "next/image";
import Logo from "./Logo";

const ModalContent = () => {
  return (
    <div className='relative pl-[1.5rem] lg:pl-[2rem] pt-[0.4rem] pb-[2rem] lg:py-[2rem] overflow-hidden'>
      <Logo />
      <h1 className={`${fuzzy_bubbles.className} text-2xl lg:text-5xl mt-[4rem] font-bold`}>
        Massage <br />
        Treatment
      </h1>
      <h3 className='text-lg lg:text-4xl mt-1 font-bold tracking-wider'>
        PROMO LIMITED TIME
      </h3>
      <div className='flex gap-1 lg:gap-3 mt-[0.5rem] lg:mt-[3rem]'>
        <Icon
          src='email.svg'
          size='w-4 h-4 lg:w-6 lg:h-6'
          link='mailto:massimassage@icloud.com'
        />
        <a href={`mailto:${email}`} className='lg:tracking-wider text-sm lg:text-md'>{`${email}`}</a>
      </div>
      <div className="mb-[1rem] lg:mb-[2rem]">
        <p className='mt-[1rem] lg:mt-[2rem] font-bold text-md lg:text-lg tracking-wider'>
          Elevate your <br />
          experience with
        </p>
        <ul className='mt-[0.5rem] flex flex-col gap-[0.5rem] font-bold text-md lg:text-lg'>
          <li>
            60&apos;&nbsp;&nbsp;&nbsp;_£60
          </li>
          <li>
            90&apos;&nbsp;&nbsp;&nbsp;_£90
          </li>
          <li>
            120&apos;&nbsp;&nbsp;_£100
          </li>
        </ul>
        <p className='mt-[1rem] lg:mt-[2rem] text-md lg:text-lg font-bold leading-8 tracking-wider'>
          First massage
          <br />
          for a luxurious
          <br />
          90&apos;&nbsp;&nbsp;_£60
        </p>
      </div>
      <a
        href={`${calendarURL}`}      
        className={`px-6 rounded-full py-2 bg-blue-300 hover:bg-[#0a2fc4] hover:text-white font-bold text-md lg:text-lg tracking-widest` }
      >
        BOOK NOW
      </a>
      <div className='absolute w-[9rem] h-[9rem] lg:w-[15rem] lg:h-[15rem] border-[#fff9f9] border-2 -right-[0.5rem] lg:-right-2 bottom-[12rem] lg:bottom-[15rem] promo1 z-10 rounded-[10px]'>
        <Image
          src={promo1}
          alt='promo1-guy-massage'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='absolute w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] border-[#fff9f9] border-8 -right-2 lg:right-10 bottom-[1rem] lg:-bottom-[1rem] promo2 z-10 rounded-[10px]'>
        <Image
          src={promo2}
          alt='promo2-guy-massage'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-full object-cover'
        />
        </div>
        <div className="rounded-full absolute bg-sky-100 -z-10 w-[12rem] h-[12rem] lg:w-[20rem] lg:h-[20rem] bottom-[12rem] lg:bottom-[15rem] right-0"></div>
        <div className="rounded-full absolute bg-sky-50 -z-20 w-[24rem] h-[24rem] lg:w-[45rem] lg:h-[45rem] -bottom-[10rem] -right-[6rem] lg:-bottom-[22rem] lg:-right-[6rem]"></div>
    </div>
  );
};

export default ModalContent;
