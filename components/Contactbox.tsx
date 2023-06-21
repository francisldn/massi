import React from 'react'
import Infobox from './Infobox'
import Icon from './Icon'

const Contactbox = () => {
  return (
      <Infobox>
          <p className="text-2xl lg:text-3xl text-amber-950 text-center mt-8">Not sure what is the best option massage for you?</p>
          <br />
          <div className="my-auto flex flex-col gap-4">
            <p className="text-2xl lg:text-3xl text-amber-950 text-center">Contact Us</p>
            <ul className="flex gap-8 p-5 my-auto flex-wrap justify-center">
                <li><Icon src="/gmail.svg" size="icon-medium" link="mailto:massimassage@icloud.com" /></li>
                <li><Icon src="/whatsapp.svg" size="icon-medium-small" link="https://wa.me/447453860906?text=Hi%20I'm%20interested%20in%20the%20Massi%20Massage%20service."/></li>
                <li><Icon src="/telegram.svg" size="icon-medium-small" link="https://t.me/Somassimassage"/></li>
                <li><Icon src="/instagram.svg" size="icon-medium-small" link="https://instagram.com/massimassage"/></li>
                <li><Icon src="/mobile.svg" size="icon-medium-small" link="tel:+447453860906"/></li>
            </ul>
          </div>
    </Infobox>
  )
}

export default Contactbox