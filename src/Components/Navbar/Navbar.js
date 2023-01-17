import React, { useState } from "react";
// import NavLink from "./NavLink";
import NavLink from "./NavLink";
import { ImWhatsapp } from "react-icons/im";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const link = [
    { name: "Home", to: "", isSubmenu: false, submenu1: [], submenu2: [] },
    {
      name: "About Us",
      to: "/aboutUs",
      isSubmenu: false,
      submenu1: [],
      submenu2: [],
    },
    {
      name: "Business Setup",
      to: "",
      isSubmenu: true,
      submenu2: [],

      submenu1: [
        {
          heading: "Popular entities(Private Limited)",
          menu: [
            { name: "LLP Registration ", to: "" },
            { name: "Private Limited Company Registration ", to: "" },
            { name: "Partnership Registration ", to: "" },
            { name: "Sole Proprietorship Registration ", to: "" },
            { name: "Public Limited Company Registration ", to: "" },
            { name: "One Person Company Registration", to: "" },
          ],
        },
        {
          heading: "Company Conversion ",
          menu: [
            { name: "Partnership firm to LLP ", to: "" },
            { name: "Pvt Ltd Company to Public Ltd Company ", to: "" },
            { name: "Proprietorship to Pvt Ltd Company", to: "" },
          ],
        },
        {
          heading: "Special entities (MSME/SSI)",
          menu: [
            { name: "MSME/SSI Registration", to: "" },
            { name: "Section 8 Company Registration", to: "" },
            { name: "Nidhi Company Registration", to: "" },
            { name: "Indian Subsidiary Registration", to: "" },
            { name: "Microfinance Company Registration", to: "" },
            { name: "NBFC License", to: "" },
          ],
        },
      ],
    },
    {
      name: "Registration",
      to: "",
      isSubmenu: true,
      submenu2: [],

      submenu1: [
        {
          heading: "Food License",
          menu: [
            { name: "FSSAI Food License", to: "" },
            { name: "Drug License", to: "" },
            { name: "Eating House License", to: "" },
          ],
        },

        {
          heading: "Licenses(IEC)",
          menu: [
            { name: "IEC Registration", to: "" },
            { name: "ISO Registration", to: "" },
            { name: "Trade License", to: "" },
          ],
        },

        {
          heading: "Others",
          menu: [
            { name: "Digital Signature (DSC)", to: "" },
            { name: "ESI Registration", to: "" },
            { name: "Employees Provident Fund", to: "" },
            { name: "TAN Registration", to: "" },
            { name: "Professional Tax Registration", to: "" },
            { name: "NBFC License", to: "" },
          ],
        },
      ],
    },
    {
      name: "Tax",
      to: "",
      isSubmenu: true,
      submenu1: [],
      submenu2: [
        { name: "GST", to: "" },
        { name: "ITR", to: "" },
        { name: "TDS", to: "" },
      ],
    },
    {
      name: "Trademark & IP",
      to: "",
      isSubmenu: true,
      submenu1: [],

      submenu2: [
        { name: "Trademek", to: "" },
        { name: "Patent", to: "" },
        { name: "Copyrights", to: "" },
      ],
    },

    {
      name: "Contact Us",
      to: "/contactus",
      isSubmenu: false,
      submenu1: [],
      submenu2: [],
    },
  ];

  return (
    <div className="flex justify-center items-center  flex-col mb-24 md:flex-row bg-white md:pt-4 fixed top-0 w-full z-10 md:static">
      {/* logo */}
      <div className="p-4 flex justify-between md:mr-20  items-center w-full md:w-auto">
        <img
          src="https://dhantax.com/wp-content/uploads/2022/04/dhantax-1-1536x328.png"
          className="w-60"
          alt=""
        />
        {/* hambargar  */}
        <i
          onClick={() => {
            setNavOpen(!navOpen);
          }}
          className="md:hidden"
        >
          {navOpen === true ? (
            <RiCloseLine className="text-3xl" />
          ) : (
            <RiMenu3Line className="text-3xl" />
          )}
        </i>
      </div>

      {/* main menu  */}
      {/* <div className='flex'> */}

      <ul
        className={`bg-white fixed w-full md:w-auto h-full 
        left-0 top-0 z-10 p-8 pb-28 md:pb-0 mt-16 md:mt-0 gap-4 flex flex-col md:static 
        md:flex-row md:h-auto md:p-0 md:flex-wrap overflow-scroll
         md:overflow-visible no-scrollbar md:justify-center 
         md:items-center ${
           navOpen === true
             ? "translate-x-0"
             : "-translate-x-full md:translate-x-0"
         } transition duration-1000 md:transition-none`}
      >
        {/* <div className="text-right right-0 relative my-3 md:hidden bg-slate-300"> */}
        {/* Close */}
        {/* <i className="" onClick={()=>{setNavOpen(false)}}><RiCloseLine /></i> */}
        {/* </div> */}

        {link.map((link, index) => (
          <NavLink
            key={index}
            link={link.name}
            to={link.to}
            isSubmenu={link.isSubmenu}
            submenu1={link.submenu1}
            submenu2={link.submenu2}
            index={index}
          />
        ))}
        {/* <div className="font-Redressed w-40 p-2   relative  md:ml-20 flex  font-medium items-center rounded-full bg-green-400 text-lg border-[1px]  md:py-3 md:px-5 md:flex gap-1 mr-2  cursor-pointer hover:bg-green-500  ">
          whatsapp
          <i className="text-center absolute items-center right-9">
            <ImWhatsapp />
          </i>
        </div> */}
        <button className=" rounded-full flex justify-center md:ml-20 items-center gap-2 bg-green-500 w-32 p-2 ">
          <a
            href="https://wa.me/918818813885?text=Hello%20everyone%20I%20have%20a%20question%20about%20your%20services"
            rel="noreferrer"
            target="_blank"
          >
            whatsapp
          </a>{" "}
          <ImWhatsapp />
        </button>
      </ul>

      {/* </div> */}

      {/* whatsapp button  */}
    </div>
  );
}

export default Navbar;
