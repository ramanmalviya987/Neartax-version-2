import React from 'react'

function Heading({heading}) {
  return (
    <div className='text-center sm:mb-20 mb-12'>
        <h1 className='font-Redressed text-2xl md:text-4xl text-headingColor tracking-wider font-semibold inline-block pb-6'>{heading}</h1>
      <div className='w-2/3 h-[2px] sm:w-full bg-[#61CE70] m-auto'></div>
      </div>
  )
}

export default Heading