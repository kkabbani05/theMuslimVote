import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import muslimvotetext from "../Images/muslimvotetext.png";


export default function Navbar() {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
    setNav(!nav);
    };

  return (
    <div
      className={`flex justify-between items-center h-32 max-w-[2000px] mx-auto px-10`}
    >
      <Link to="/" className={`w-full`}>
        <img src={muslimvotetext} alt="Muslim Vote Text"  className="h-auto w-[15vw] max-w-full  "/>
      </Link>

      <ul className="hidden md:flex md:font-bold md:flex-nowrap md:min-w-[600px] md:justify-end md:gap-x-8">
        <li className="p-2 relative">
            <Link to="/about/vision">
                <button className="w-auto px-3 h-16 bg-[#e8e8e8] text-[17.3px] text-[#16076d] font-bold border-8 border-[#16076d] hover:bg-[#cfcccc] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">   
                    WHAT WE DO
                </button>  
            </Link> 
        </li>
        <li className="p-2">
            <Link to="/about/vision">
                <button className="w-auto px-3 h-16 bg-[#e8e8e8] text-[17.3px] text-[#16076d] font-bold border-8 border-[#16076d] hover:bg-[#cfcccc] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">   
                    INTERACTIVE MAP
                </button>  
            </Link> 
        </li>
        <li className="p-2">
            <Link to="/about/vision">
                <button className="w-auto px-3 h-16 bg-[#e8e8e8] text-[17.3px] text-[#16076d] font-bold border-8 border-[#16076d] hover:bg-[#cfcccc] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">   
                    ABOUT US
                </button>  
            </Link> 
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <div /> : <CgMenuRightAlt size={30} />}
      </div>

      <div>
        <ul
          className={
            !nav
              ? "fixed pl-9 text-lg left-0 top-0 text-white w-[89%] h-full border-r border-r-black bg-black ease-in-out duration-500 z-10"
              : "fixed pl-9 text-lg left-[-100%] top-0 -translate-x-full w-[89%] h-full border-r border-r-black bg-black ease-in-out duration-1000"
          }
        >
          <li className="pt-9">
            {" "}
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/donate">DONATE</Link>
          </li>
          <li>
            <Link to="/volunteer">VOLUNTEER</Link>
          </li>
        </ul>

        <ul
          className={
            !nav
              ? "fixed right-0 top-0 w-[11%] h-full border-r border-r-black bg-[#52C2C8] ease-in-out duration-100"
              : "fixed right-[-100%] top-0 w-[11%] h-full border-r border-r-black bg-[#52C2C8] ease-in-out duration-1000"
          }
        >
          <li className="flex justify-center items-center pt-7">
            <div onClick={handleNav}>
              {!nav ? <AiOutlineClose size={25} /> : <div />}
            </div>
          </li>
        </ul>
      </div>
    </div>  
  )
}

