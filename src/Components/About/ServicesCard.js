import React from 'react'

function ServicesCard({icon,heading,pera,color}) {
  return (
<div className={`${color} flex justify-center items-center flex-col gap-3 md:w-[40%] lg:w-[30%] h-72 border-4 border-black p-4`}>
<i>i</i>
<h2>{heading}</h2>
<p>{pera}</p>
</div>
  )
}

export default ServicesCard