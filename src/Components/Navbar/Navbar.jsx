
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import user from '/user.png';

import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo section */}
          <div>
            <p className="text-2xl font-bold">
              Spa Beauty <span className="text-red-500">Center</span>
            </p>
          </div>
  
          {/* Menu Section and Login Image */}
          <div className="flex items-center justify-center  gap-10">
            <ul className="flex gap-8 ">
              <li className="hover:border hover:border-b-2 border-orange-400 uppercase">Home</li>
              <li className="hover:border hover:border-b-2 border-orange-400 uppercase">About</li>
              <li className="hover:border hover:border-b-2 border-orange-400 uppercase">Menu</li>
              <li className="hover:border hover:border-b-2 border-orange-400 uppercase">Contact</li>
            </ul>
  
            {/* Login Section */}
            <div className="ml-2 flex gap-4 items-center">
              <img src="user.png" alt="user" className="w-8 rounded-full" />
              <IoIosArrowDown  />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  

