/* eslint-disable no-unused-vars */
import React from 'react'

import { MdMiscellaneousServices } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const OurServices = () => {
  return (
    <div className="container py-12">
        {/*header section*/}
        <div className="text-center " >
            <h1 className=" text-4xl font-semibold">Our Services</h1> 
      </div>
      {/*icons section*/}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-12 mt-12 ">

      <div className="flex justify-center items-center gap-3">
      <MdMiscellaneousServices className="text-2xl" />
      <p  className="text-2xl font-semibold">Services</p>
      </div>
      <div className="flex justify-center items-center gap-3">
      <FiTwitter   className="text-2xl"/>
      <p  className="text-2xl font-semibold">Twitter</p>
      </div>
      <div className="flex justify-center items-center gap-3">
      <FaInstagram   className="text-2xl"/>
      <p  className="text-2xl font-semibold">Instagram</p>
      </div>
      <div className="flex justify-center items-center gap-3">
      <FaPhoneAlt  className="text-2xl" />
      <p className="text-2xl font-semibold">Whatsapp </p>
      </div>
      </div>
    </div>
  )
}

export default OurServices
