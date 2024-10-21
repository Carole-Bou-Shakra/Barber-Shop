/* eslint-disable no-unused-vars */
import React from 'react'

const Banner = () => {
  return (
    <>
     <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/*image section*/}
         <div className="flex justify-center items-center">
            <img src="/hairmodel.jpg" alt="hairmodel" className="rounded-[20px]" />
        </div>

         {/*text section*/}  
         <div className=" flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Styles</h1>
            <p className="py-2 text-grey-500 font-semibold">
            Barbering is the art of creating without eraser.</p>
           <p className="py-2 text-grey-500 font-semibold"> Happiness is a fresh new hair cut.
            </p>
         </div>
        </div>
    </div> 
    </>
  )
}

export default Banner
