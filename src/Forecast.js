import React from 'react'
import sun from './sun.png'
const Forecast = () => {
  return (
   <>
   <div className="flex items-center justify-start mt-6">

    <p className='text-white font-medium uppercase'>hourly 
    forecast</p>
   </div>
   <hr className='my-2'/>

   <div className="flex flex-row items-center justify-between 
   text-white">
    <div className="flex flex-col items-center
    justify-center">
        <p className="font-light text-sm">
            04:30 PM 
        </p>
        <img src={sun} alt="" className='w-12 my-1'/>
        <p className="font-medium">22°C</p>
         </div>


         <div className="flex flex-col items-center
    justify-center">
        <p className="font-light text-sm">
            04:30 PM 
        </p>
        <img src={sun} alt="" className='w-12 my-1'/>
        <p className="font-medium">22°C</p>
         </div>


         <div className="flex flex-col items-center
    justify-center">
        <p className="font-light text-sm">
            04:30 PM 
        </p>
        <img src={sun} alt="" className='w-12 my-1'/>
        <p className="font-medium">22°C</p>
         </div>


         <div className="flex flex-col items-center
    justify-center">
        <p className="font-light text-sm">
            04:30 PM 
        </p>
        <img src={sun} alt="" className='w-12 my-1'/>
        <p className="font-medium">22°C</p>
         </div>


         <div className="flex flex-col items-center
    justify-center">
        <p className="font-light text-sm">
            04:30 PM 
        </p>
        <img src={sun} alt="" className='w-12 my-1'/>
        <p className="font-medium">22°C</p>
         </div>





 </div>
   
   
   
   
   </>
  )
}

export default Forecast
