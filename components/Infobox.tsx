import React, { ReactNode} from 'react'

const Infobox: React.FC<{ children: ReactNode; minHeight?: boolean; maxWidth?: string; backgroundColor?:string }> = ({ children, minHeight, maxWidth, backgroundColor}) => {
  return (
      <div className={`${backgroundColor} rounded-xl flex flex-col py-[2rem] px-[0.4rem] lg:px-[2rem] items-center self-center ${minHeight ? `lg:h-[480px]` : ''} ${maxWidth ? maxWidth : ''} fade-in-fwd shadow-info`}>{children}</div>
  )
}

export default Infobox