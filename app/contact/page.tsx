import React from "react";
import Contactbox from "../../components/Contactbox";
import { edu_sa } from "@/utils/font";
import { calendarURL } from "@/utils/constants";

const Contact = () => {
  return (
    <main className='w-full flex flex-col items-center pt-[4rem]'>
      <div className='w-[80%] lg:w-[50%]'>
        <p className='text-center lg:text-lg'>
          *Our treatments are offered only to male clients
        </p>
        <br />
        <p className='text-center lg:text-lg'>
          *Please note that for home visit appointments you will need to provide
          a massage table <br /> OR <br /> bed with towels for the treatment
        </p>
        <br />
        <div className='flex text-center mt-[4rem] justify-center'>
          <a href={calendarURL} target="_blank" rel="noreferrer noopener">
            <span
              className={`text-link text-4xl lg:text-5xl text-center bg-stone-200 ${edu_sa.className}`}
            >
              Book your Session
            </span>
          </a>
        </div>
        <div className='mt-[5rem] w-full h-full mx-auto'>
          <Contactbox />
        </div>
      </div>
    </main>
  );
};

export default Contact;
