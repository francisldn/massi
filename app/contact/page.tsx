import React from "react";
import Contactbox from "../../components/Contactbox";
import { edu_sa } from "@/utils/font";
import { calendarURL } from "@/utils/constants";

const Contact = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center pt-[3rem] lg:pt-[4rem]'>
      <div className='w-[80%] lg:w-[50%]'>
        <p className='text-center text-sm lg:text-lg'>
          *Our treatments are offered only to male clients
        </p>
        <br />
        <p className='text-center text-sm lg:text-lg'>
          *Please note that for home visit appointments you will need to provide
          a massage table <br /> OR <br /> bed with towels for the treatment
        </p>
        <br />
        <div className='flex text-center mt-[2rem] lg:mt-[4rem] justify-center'>
          <a href={calendarURL} target="_blank" rel="noreferrer noopener">
            <span
              className={`text-link text-xl lg:text-5xl text-center py-[0.5rem] px-[2rem] rounded-full bg-stone-200 hover:bg-[#0a2fc4] text-black hover:text-white ${edu_sa.className}`}
            >
              Book your Session
            </span>
          </a>
        </div>
        <div className='mt-[3rem] lg:mt-[5rem] w-full h-full mx-auto'>
          <Contactbox />
        </div>
      </div>
    </main>
  );
};

export default Contact;
