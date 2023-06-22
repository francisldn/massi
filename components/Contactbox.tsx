import React from 'react'
import Infobox from './Infobox'
import Icon from './Icon'
import Socials from './Socials'

const Contactbox = () => {
  return (
      <Infobox>
          <p className="text-2xl lg:text-3xl text-amber-950 text-center mt-8">Not sure what is the best option massage for you?</p>
          <br />
          <div className="my-auto flex flex-col gap-4">
            <p className="text-2xl lg:text-3xl text-amber-950 text-center">Contact Us</p>
            <Socials />
        </div>
    </Infobox>
  )
}

export default Contactbox