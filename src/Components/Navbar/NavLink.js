import Submenu1 from "./Submenu1";
import { useState } from "react";
import Submenu2 from "./Submenu2";
import { AiOutlineDown} from "react-icons/ai";
import { Link } from "react-router-dom";

function NavLink({ link, to, isSubmenu, index, submenu1, submenu2 }) {
  // console.log(submenu_2.length)

  // to make a click able for submenu links
  const [submenuClick, setSubmenuClick] = useState(false);

  return (
    <>
      <li
      onClick={()=> setSubmenuClick(!submenuClick)}
      onMouseEnter={()=> setSubmenuClick(true)}
      onMouseLeave={()=> setSubmenuClick(false)}
        id={index}
        className="text-xl flex flex-col pr-2 gap-1 font-medium   text-headingColor group"
      >
        <div className="hover:text-text-primary flex justify-between w-full gap-2">
          <Link className="" to={to}>
            {link}
          </Link>
          {isSubmenu && (
            <i className="md:border-0 md:h-auto border-[1px] border-black rounded-lg h-full md:w-auto w-8 flex justify-center items-center">
              {<AiOutlineDown />}
            </i>
          )}
        </div>
        {
          submenuClick &&  <div  className="md:absolute w-full " >
          {submenu1.length > 0 && (
            <Submenu1 isSubmenu={isSubmenu} submenu1={submenu1} />
          )}
          {submenu2.length > 0 && (
            <Submenu2 isSubmenu={isSubmenu} submenu2={submenu2} />
          )}
          </div>
        }
       
       
      </li>
    </>
  );
}

export default NavLink;
