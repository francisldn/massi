import React from "react";
import { edu_sa, fuzzy_bubbles } from "../utils/font";
import Icon from './Icon';

const ModalContent = () => {
  return (
    <div className="px-[2rem]">
      <h1 className={`${fuzzy_bubbles.className} text-4xl lg:text-5xl mt-2`}>
        Massage <br/>Treatment
      </h1>
          <h3 className="text-4xl mt-1 font-bold tracking-wider">PROMO LIMITED TIME</h3>
          <div className="flex gap-3 mt-[3rem]">
            <Icon src="email.svg" size="w-6 h-6" link="mailto:massimassage@icloud.com"/>
            <a href="mailto:massimassage@icloud.com" className="tracking-wider">{`massimassage@icloud.com`}</a>
          </div>
      <div>
        <p className="mt-[2rem] font-bold text-lg tracking-wider">Elevate your <br/>experience with</p>
        <ul className="mt-[0.5rem] flex flex-col gap-[0.5rem] font-bold text-lg">
            <li>60&apos;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_£60</li>
            <li>90&apos;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_£90</li>
            <li>120&apos;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_£100</li>
        </ul>
        <p className="mt-[2rem] text-lg font-bold leading-8 tracking-wider">First massage<br />for a luxurious<br />{`90' _£60`}</p>
          
    </div>
          <button className={`px-6 rounded-full py-2 bg-blue-300 hover:bg-[#0a2fc4] hover:text-white font-bold text-lg my-[2rem] tracking-widest`}>
            BOOK NOW 
          </button>
          
    </div>
  );
};

export default ModalContent;
