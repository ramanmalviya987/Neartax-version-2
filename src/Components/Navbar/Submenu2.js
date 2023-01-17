import React from 'react'

function Submenu2({isSubmenu, submenu2}) {
  return (
    <div className='hidden group-hover:block hover:block bg-white border-2 border-black md:p-8 md:rounded-lg md:absolute md:bg-[#F5EDCE] top-8 p-4'>
<ul className='font-Redressed font-medium'>
{

 submenu2.length>0&&submenu2.map((menu,index)=>{
   return (<li className='hover:text-text-primary py-2' key={index}><a href="/">{menu.name}</a></li>)
})

}
</ul>
    </div>
  )
}

export default Submenu2