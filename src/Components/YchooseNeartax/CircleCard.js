import React from "react";

function CircleCard({ icon, heading, pera, IsActive, activeHeandler, index }) {
  return (
    <>
      {/* cards */}
      {/* { console.log(index)} */}
      <div
        className={`rounded-lg sm:shadow-inherit shadow-4xl  px-2 py-4 m-4 sm:border-0 sm:relative ${
        // className={`rounded-lg bg-gradient-to-r from-[#C0DEFF] to-[#ADA2FF]  px-2 py-4 m-4 sm:border-0 sm:relative ${
          index === 0 && "-top-24"
        } 
      ${index === 1 && "-top-32 -right-64"}
      ${index === 2 && "-top-20 -right-64"}
      ${index === 3 && "-top-40"}
      ${index === 4 && "-top-[44rem] right-64"}
      ${index === 5 && "-top-[42rem] right-64"}
      `}
      >
        <div className="text-center flex flex-col items-center gap-8">
          <div
            onClick={activeHeandler}
            className={`${
              IsActive === true
                ? "bg-background-primay text-white border-white shadow-3xl border-4"
                : "text-text-primary bg-white shadow-xl"
            } hover:bg-background-primay hover:text-white h-36 w-36 p-2 rounded-full flex flex-col justify-center items-center  shadow-black/20 font-bold text-lg font-Redressed cursor-pointer`}
          >
            {/* // icons is not defind */}
            <i className="before:content-['\f06c']"></i>
            <span id={index} className="text-center">
              {heading}
            </span>
          </div>
          <p
            className={`text-xl opacity-80 sm:absolute sm:w-[26rem] ${
              IsActive === true ? "sm:block" : "sm:hidden"
            } 
      ${index === 0 && "top-80"}
    ${index === 1 && "top-40 right-[19rem]"}
     ${index === 2 && "-top-20 right-[19rem]"}
     ${index === 3 && "-top-48"}
     ${index === 4 && "top-40 left-[18.5rem]"}
     ${index === 5 && "-top-16 left-[18.5rem]"}
    `}
          >
            {pera}
          </p>
        </div>
      </div>
    </>
  );
}

export default CircleCard;
