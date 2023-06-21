import React, { ReactNode} from 'react'

const Infobox: React.FC<{ children: ReactNode; minHeight?: boolean; maxWidth?:string }> = ({ children, minHeight, maxWidth}) => {
  return (
      <div className={`bg-neutral-200 rounded-xl flex flex-col py-[2rem] px-[2rem] items-center self-center ${minHeight ? `lg:h-[480px]` : ''} ${maxWidth ? maxWidth : ''}`}>{children}</div>
  )
}

export default Infobox