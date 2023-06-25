import React from 'react'
import Icon from './Icon'
import { email, instagram, mobile, telegram, whatsapp } from '@/utils/constants'

const Socials = () => {
  return (
    <ul className="flex gap-6 my-auto flex-wrap justify-center">
          <li><Icon src="/gmail.svg" size="w-[30px] h-[30px] md:w-[50px] md:h-[50px]" link={`mailto:${email}`} /></li>
          <li><Icon src="/whatsapp.svg" size="w-[26px] h-[26px] md:w-[40px] md:h-[40px]" link={ whatsapp}/></li>
          <li><Icon src="/telegram.svg" size="w-[30px] h-[30px] md:w-[45px] md:h-[45px]" link={ telegram} /></li>
          <li><Icon src="/instagram.svg" size="w-[30px] h-[30px] md:w-[45px] md:h-[45px]" link={ instagram} /></li>
    </ul>
  )
}

export default Socials