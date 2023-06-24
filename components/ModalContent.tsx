import React from "react";
import { edu_sa, fuzzy_bubbles } from "../utils/font";
import Icon from "./Icon";
import { calendarURL, email, promo1, promo2 } from "@/utils/constants";
import Image from "next/image";

const ModalContent = () => {
  return (
    <div className='relative pl-[2rem] py-[2rem] overflow-hidden'>
      <h1 className={`${fuzzy_bubbles.className} text-4xl lg:text-5xl mt-2`}>
        Massage <br />
        Treatment
      </h1>
      <h3 className='text-4xl mt-1 font-bold tracking-wider'>
        PROMO LIMITED TIME
      </h3>
      <div className='flex gap-3 mt-[3rem]'>
        <Icon
          src='email.svg'
          size='w-6 h-6'
          link='mailto:massimassage@icloud.com'
        />
        <a href={`mailto:${email}`} className='tracking-wider'>{`${email}`}</a>
      </div>
      <div className="mb-[2rem]">
        <p className='mt-[2rem] font-bold text-lg tracking-wider'>
          Elevate your <br />
          experience with
        </p>
        <ul className='mt-[0.5rem] flex flex-col gap-[0.5rem] font-bold text-lg'>
          <li>
            60&apos;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_£60
          </li>
          <li>
            90&apos;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_£90
          </li>
          <li>
            120&apos;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_£100
          </li>
        </ul>
        <p className='mt-[2rem] text-lg font-bold leading-8 tracking-wider'>
          First massage
          <br />
          for a luxurious
          <br />
          90&apos;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_£60
        </p>
      </div>
      <a
        href={`${calendarURL}`}      
        className={`px-6 rounded-full py-2 bg-blue-300 hover:bg-[#0a2fc4] hover:text-white font-bold text-lg tracking-widest` }
      >
        BOOK NOW
      </a>
      <div className='absolute w-[11rem] h-[11rem] lg:w-[15rem] lg:h-[15rem] border-[#fff9f9] border-2 -right-2 bottom-[15rem] lg:bottom-[15rem] promo1 z-10 rounded-[10px]'>
        <Image
          src={promo1}
          alt='promo1-guy-massage'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='absolute w-[12rem] h-[12rem] lg:w-[15rem] lg:h-[15rem] border-[#fff9f9] border-8 right-10 bottom-[2rem] lg:-bottom-[1rem] promo2 z-10 rounded-[10px]'>
        <Image
          src={promo2}
          alt='promo2-guy-massage'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default ModalContent;
