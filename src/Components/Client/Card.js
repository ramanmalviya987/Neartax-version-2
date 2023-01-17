import React from 'react'

const Card = ({text,name,image,content}) => {
  return (
    <div className="  lg:w-[28%]  shadow-4xl rounded-md  mx-7">
          <div className=" p-8">
            <p className="text-base -mt-2 mb-6">
            {text}
            </p>
            <img className="h-32 m-auto" src={image} alt="avatar" />
            <h3 className="text-[#041D49] mb-6 mt-3 text-xl">{name}</h3>
            <p  className=" text-sm">
             {content}
            </p>
          </div>
        </div>
  )
}

export default Card