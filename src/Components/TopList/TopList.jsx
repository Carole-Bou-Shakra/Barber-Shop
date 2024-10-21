// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import hair2 from '/hair2.jpeg'
// eslint-disable-next-line no-unused-vars
import makeup1 from '/makeup1.jpeg'
// eslint-disable-next-line no-unused-vars
import spa2 from '/spa2.jpg'
import { Link } from 'react-router-dom';


const BeautyData = [
   {
     image: "hair2.jpeg",
     price: "60",
     name: "Styles",
     desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Porro repellat atque vitae delectus odit doloremque?
            Ratione exercitationem ducimus perspiciatis harum odio 
            corrupti facilis necessitatibus deserunt sapiente.
            Praesentium, neque dolores? Minima.`,
     button: "Reserve" 
   },
   {
     image: "makeup1.jpeg",
     price: "40",
     name: "Beauty",
     desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Porro repellat atque vitae delectus odit doloremque?
            Ratione exercitationem ducimus perspiciatis harum odio 
            corrupti facilis necessitatibus deserunt sapiente.
            Praesentium, neque dolores? Minima.`,
     button: "Reserve" 
   },
   {
     image: "spa2.jpg",
     price: "100",
     name: "Relaxation",
     desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Porro repellat atque vitae delectus odit doloremque?
            Ratione exercitationem ducimus perspiciatis harum odio 
            corrupti facilis necessitatibus deserunt sapiente.
            Praesentium, neque dolores? Minima.`,
     button: "Reserve" 
   }
 ];
 
 const TopList = () => {
   return (
     <div className="container py-14">
       <div className="text-center mb-12">
         <h1 className="text-4xl font-semibold mt-10">TopList</h1>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
         {BeautyData.map((item, index) => (
           <div
             key={index}
             className="flex flex-col items-center gap-4 bg-white/60 p-5 sm:p-3 rounded-[20px] shadow-[35px] w-full hover:scale-110 transition duration-300"
           >
             <img
               src={item.image}
               alt={item.name}
               className="w-60 sm:w-40 sm:h-40 h-full object-cover mx-auto img-shadow rounded-[20px] md:mx-0"
             />
             <div className="space-y-3 text-center">
               <p className="text-lg font-semibold">{item.name}</p>
               <p className="text-gray-600">{item.desc}</p>
               <p className="text-lg font-semibold">{item.price}$</p>
               {/* Wrap the button with Link */}
               <Link to="/reserve">
                <button className="bg-orange-500 text-black px-4 py-2 w-[90px] rounded-[20px] hover:bg-orange-400 hover:text-black active:bg-orange-600 active:text-black duration-300">
                  {item.button}
               </button>
               </Link>

             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default TopList;