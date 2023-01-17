import React from 'react'
import Heading from '../Heading/Heading'


export default function HowWark() {
    return (
        <div className='flex flex-col justify-center items-center mt-20 px-12 lg:px-20'>

{/* main heading  */}
<Heading heading={'How we works'}/>

  {/* parent      */}
<div className='flex flex-col sm:flex-row justify-between items-center w-full'>

{/* Circle 1  */}
<div className='flex justify-center items-center flex-col gap-6 mb-20'>
<div className='rounded-full shadow-xl h-32 w-32 flex flex-col justify-center items-center border-2'>
{/* // icons is not defind */}     
    <i className="before:content-['\f06c'] relative top-8"></i>
    <span className='h-[3.2rem] w-[2.5rem] bg-background-primay flex justify-center items-center rounded-2xl text-white relative -top-12 left-12'>01</span>
</div>
<h2  style={{textShadow: '0px 0px 10px rgb(0 0 0 / 30%)'}} className='text-center text-[22px] font-Redressed font-semibold text-[#3a3a3a] mb-6'>Understanding Ideas</h2>
</div>
       
{/* // icons is not defind */}     
 <i></i>

{/* Circle 2  */}
<div className='flex justify-center items-center flex-col gap-6 mb-20'>
<div className='rounded-full shadow-xl h-32 w-32 flex flex-col justify-center items-center border-2'>
{/* // icons is not defind */}     
    <i className="before:content-['\f06c'] relative top-8"></i>
    <span className='h-[3.2rem] w-[2.5rem] bg-background-primay flex justify-center items-center rounded-2xl text-white relative -top-12 left-12'>02</span>
</div>
<h2  style={{textShadow: '0px 0px 10px rgb(0 0 0 / 30%)'}} className='text-center text-[22px] font-Redressed font-semibold text-[#3a3a3a] mb-6'>Designing Solutions</h2>
</div>

{/* // icons is not defind */}     
<i></i>
{/* Circle 3  */}
<div className='flex justify-center items-center flex-col gap-6 mb-20'>
<div className='rounded-full shadow-xl h-32 w-32 flex flex-col justify-center items-center border-2'>
{/* // icons is not defind */}     
    <i className="before:content-['\f06c'] relative top-8"></i>
    <span className='h-[3.2rem] w-[2.5rem] bg-background-primay flex justify-center items-center rounded-2xl text-white relative -top-12 left-12'>03</span>
</div>
<h2  style={{textShadow: '0px 0px 10px rgb(0 0 0 / 30%)'}} className='text-center text-[22px] font-Redressed font-semibold text-[#3a3a3a] mb-6'>Delivering Results</h2>
</div>

</div>

    </div>
  )
}