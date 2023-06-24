import React from 'react'

const CloseButton: React.FC<{closeModal:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void}> = ({closeModal}) => {
  return (
    <button
          className='absolute top-0 right-0 -mt-3 -mr-3 w-6 h-6 z-50 bg-black rounded-full overflow-hidden cursor-pointer'
          onClick={(e) => closeModal(e)}
        >
          <img src='/cancel.svg' alt='close icon' />
        </button>
  )
}

export default CloseButton