import React from "react";
import { edu_sa } from "@/utils/font";
import { calendarURL } from "@/utils/constants";

const MenuItem: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => {
  return (
    <li
      className={`text-3xl my-2 text-link bg-stone-200 ${edu_sa.className} w-80 text-center`}
    >
      <a href={link}>
        {title}
      </a>
    </li>
  );
};

const Menu = () => {
  return (
    <nav className='flex flex-col items-center w-full h-24'>
      <ul className='flex flex-col items-center w-full'>
        <MenuItem title='Our Service' link='/service' />
        <hr className='dotted' />
        <MenuItem title='Contact Me' link='/contact' />
        <hr className='dotted' />
        <MenuItem title='Book Now' link={calendarURL} />
        <hr className='dotted' />
      </ul>
    </nav>
  );
};

export default Menu;
