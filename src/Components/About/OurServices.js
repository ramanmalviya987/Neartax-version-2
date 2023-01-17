import React from 'react'
import Heading from '../Heading/Heading'
import ServicesCard from './ServicesCard'

function OurServices() {

const servicesData=[

  {
    icon: '',
    color: "bg-green-500",
heading : "Accounting",
pera: 'A professional accounting team, with global service will bring you high end expert service. We do everything, from book keeping, archiving, accounting, tax.'
  },

  {
    icon: '',
    color: "bg-green-500",
heading : "Tax consulting",
pera: 'Ensuring knowledge of the newest laws, we take care for your business by providing a top quality consultants and managing of your taxes.' 
 },

  {
    icon: '',
    color: "bg-green-500",
heading : "Salary managing",
pera: 'we take care of your calm dreams by ensuring all the necessary paperwork and on time payments as well managing the salary’s.' 

},

  {
    icon: '',
    color: "bg-green-500",
heading : "Legal",
pera: 'We offer our services for any legal advice and managing related to taxes or accounting of any kind. We offer a complete solution.'

},

  {
    icon: '',
    color: "bg-green-500",
heading : "File archiving",
pera: 'Running out of storage for your files? We accommodate digital or physical space for storing your files. We follow all the necessary regulations.' 

},

  {
    icon: '',
    color: "bg-green-500",
heading : "Administrative services",
pera: "We take care of it all, from invoicing, archiving, legal paperwork. You can just dump everything on us and we will do it ."  

},



]


  return (
    <div className='flex justify-center items-center text-center flex-col gap-4 p-4'>
<Heading heading='Our Services' />
<p className='text-lg md:w-[90%]'>We are a premier Management consulting  firm firm fast and reliable professional services in areas of audit, assurance, accounting, Income tax, Goods and Service Tax, Corporate Governance Services, business financial Services and Start up/Business Registration to domestic and multinational business entities.</p>

{/* services card  */}
<div className='flex justify-center items-center flex-col gap-3 flex-wrap md:flex-row md:w-[90%]'>

{servicesData.map((data,index)=>(
<ServicesCard icon={data.icon} heading={data.heading} color={data.color} pera={data.pera}/>

))


}


</div>

    </div>
  )
}

export default OurServices