import React from 'react'

const MenuItem: React.FC<{ title: string }> = ({ title }) => {
    return (
        <li className='text-2xl text-black bg-stone-200 px-20 my-2 py-1'>{title}</li>
    )
}

const Menu = () => {
  return (
      <nav className='flex flex-col items-center justify-center w-full h-24 mt-[9%]'>
        <ul className='flex flex-col items-center justify-center space-x-4'>
              <MenuItem title='Our Service' />
              <hr className="dotted"/>
              <MenuItem title='Contact Me' />
              <hr className="dotted"/>
              <MenuItem title='Book Now' />
              <hr className="dotted"/>
        </ul>
    </nav>
  )
}

export default Menu