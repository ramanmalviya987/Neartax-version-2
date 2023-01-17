import React from "react";

function Submenu1({ isSubmenu, submenu1 }) {
  return (
    <div
      className={`justify-center border-2 bg-white md:bg-[#F5EDCE] border-black w-auto md:w-[76%] md:mt-6 md:rounded-lg md:absolute top-8    p-4 hidden group-hover:flex hover:flex flex-col md:flex-row  `}
    >
      {isSubmenu &&
        submenu1.map((data, index) => (
          <div key={index} className="pt-4 p-8 w-76">
            <h2 className="text-2xl font-Redressed font-semi-bold text-headingColor">
              {data.heading}
            </h2>
            <ul className=" w-full">
              {data.menu.map((menu, index) => (
                <li
                  key={index}
                  className="w-full cursor-pointer text-xl font-normal hover:bg-background-primay hover:text-white my-2  py-1 px-2"
                >
                  <a href="/">{menu.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Submenu1;
