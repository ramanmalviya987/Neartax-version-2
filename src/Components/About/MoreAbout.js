import React from 'react'

function MoreAbout() {
  return (
    <div className='flex flex-col md:flex-row p-4 w-screen justify-evenly'>
        <div className='p-4 flex gap-10 flex-col md:w-[40%]'>
<p className='text-text-primary opacity-90'>More about</p>
<h1 className='text-5xl text-text-primary' >dhantex</h1>
<p className='opacity-80'>DhanTax is a leading premier management consultant firm rendering comprehensive professional services which include audit, management consultancy, tax consultancy, accounting services, manpower management, secretarial services etc.</p>
        </div>

        <div className='flex flex-col gap-10 p-4 justify-end md:w-[55%]'>
<p >DhanTax is a professionally managed firm. The team consists of distinguished chartered accountants, corporate financial advisors, and tax consultants. The firm represents a combination of specialized skills, which are geared to offers sound financial advice and personalized proactive services. Those associated with the firm have regular interaction with industry and other professionals which enables the firm to keep pace with contemporary developments and to meet the needs of its clients.</p>
<p >DhanTax provides services related to Accounting, Taxation,Goods and Service tax,Income tax return filling, and TDS return filing, Financial services , Application for PAN,TAN & TIN No, ,Finalisation of Balance sheet & Statement of Profit & Loss, Corporate compliance, Registration of startup,Trust,Society & Company and ROC matters.</p>
        </div>


    </div>
  )
}

export default MoreAbout