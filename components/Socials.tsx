import React from 'react'
import Icon from './Icon'
import { email, instagram, mobile, telegram, whatsapp } from '@/utils/constants'

const Socials = () => {
  return (
    <ul className="flex gap-8 my-auto flex-wrap justify-center">
          <li><Icon src="/gmail.svg" size="icon-medium" link={`mailto:${email}`} /></li>
          <li><Icon src="/whatsapp.svg" size="icon-medium-small" link={ whatsapp}/></li>
          <li><Icon src="/telegram.svg" size="icon-medium-small" link={ telegram} /></li>
          <li><Icon src="/instagram.svg" size="icon-medium-small" link={ instagram} /></li>
          <li><Icon src="/mobile.svg" size="icon-medium-small" link={ mobile} /></li>
    </ul>
  )
}

export default Socials