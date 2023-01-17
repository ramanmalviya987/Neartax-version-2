import React from 'react'

function CoreValueCard({icon,heading,pera}) {
  return (
<div className='gap-8 flex ml-8 mb-6'>
<div className='rounded-full bg-background-primay flex justify-center items-center p-6 w-12 h-12'>
{/* // icons is not defind */}     
    <i className="before:content-['\f06c']"></i>
</div>
<div className='flex flex-col gap-2'>
<h3 className='text-text-primary text-[30px] font-Redressed'>{heading} :</h3>
<p className='w-[90%] text-base'>{pera}</p>
</div>
</div>
  )
}

export default CoreValueCard