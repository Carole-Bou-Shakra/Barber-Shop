// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import fullcolor from '/fullcolor.jpg'

const Hero = () => {
    return (
      <div>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[600px] gap-8  items-center">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-8 text-center  pt-15 md: p-0">
            <h1 className="text-3xl  lg:text-4xl font-semibold">
              Barbering is the art of creating without eraser.
              Happiness is a fresh new haircut.
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis cum maiores qui non ipsa quod dolor atque ad a. Blanditiis, reprehenderit ullam exercitationem dicta magni fugit accusamus doloremque autem.
            </p>
            <div className="flex gap-4 items-center md:justify-start justify-center" >
              <button className="primary-btn hover:scale-105 duration-200">Reservation</button>
              <button className="secondary-btn hover:scale-105 duration-200">Catalogue</button>
            </div>
          </div>
  
          {/* Image section */}
            <div className="flex flex-col justify-center items-center rounded-[50px] mt-10">
            <img src="fullcolor.jpg" alt="fullcolor" className="  w-[650px] h-[75vh] px-5 mt-5 rounded-[55px] img-shadow max-w-[700px] mx-auto " />
            </div>

        </div>
      </div>
    );
  };
  
  export default Hero;
  
