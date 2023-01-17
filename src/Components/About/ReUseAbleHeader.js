import React from "react";
import about from '../../Components/public/aboutus.jpg'
const ReUseAbleHeader = (props) => {
  return (
    <div
      className="my-4 w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center pl-10  text-black items-start flex-col text-center gap-10"
      style={{
        backgroundImage:
          `url(${about})`,
          opacity: 0.7
      }}
    >
      <h1 className="md:text-6xl text-4xl font-bold">{props.title}</h1>
    </div>
  );
};

export default ReUseAbleHeader;
