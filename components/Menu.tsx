import React from "react";
import { edu_sa } from "@/utils/font";
import { calendarURL } from "@/utils/constants";

const MenuItem: React.FC<{ title: string; link: string; bounce?: boolean }> = ({
  title,
  link,
  bounce,
}) => {
  return (
    <a href={link}>
      <li
        className={`text-xl md:text-2xl my-2 text-link bg-blue-100 hover:bg-[#0a2fc4] hover:text-white ${
          edu_sa.className
        } cursor-pointer w-80 text-center shiny ${
          bounce ? "animate-bounce" : ""
        }`}
      >
        {title}
      </li>
    </a>
  );
};

const Menu = () => {
  return (
    <nav className='flex flex-col items-center w-full justify-center'>
      <ul className='flex flex-col items-center w-full justify-center'>
        <MenuItem title='Our Services' link='/service' />
        <hr className='dotted' />
        <MenuItem title='Contact Me' link='/contact' />
        <hr className='dotted' />
        <MenuItem title='Book Now' link={calendarURL} bounce={true} />
        <hr className='dotted' />
      </ul>
    </nav>
  );
};

export default Menu;
