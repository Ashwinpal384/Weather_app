import React from 'react'
import sun from "./sun.png"
import { DateTime } from "luxon";
import {UilArrowUp,UilArrowDown,UilTemperature,UilTear,UilWind,UilSun,UilSunset
} from "@iconscout/react-unicons";
const Tem = ({weather:{lat,lon,temp,feels_like,timezone , temp_max,temp_min,details,icon,humdity,speed,sunrise,sunset,weather,name,dt,country
,format="hh:mm a"}}) => {
  const iconurl = (code)=>`http://openweathermap.org/img/wn/${code}@2x.png`;
  return (
  <>
    <div className='flex items-center justify-center py-6 text-xl text-cyan-200'>
   <p>{details}</p>      
      </div>
  
   <div className="flex flex-row items-center justify-between 
   text-white py-3">
     <img src={iconurl(icon)} alt="404" className='w-20' />
     <p className="text-3xl">{`${(temp-273).toFixed()}°C`}</p>
    <div className="flex flex-col space-y-2">

    <div className="flex font-light text-sm 
     items-center justify-center">
    <UilTemperature size={25} className="mr-1"/>
    Real fell: 
    <span className='font-medium ml-1'>{`${(feels_like-273).toFixed()}°C`}</span>
     </div>



   


     <div className="flex font-light text-sm 
     items-center justify-center">
    <UilWind size={25} className="mr-1"/>
    Wind Speed: 
    <span className='font-medium ml-1'>{`${speed}km/h`}</span>
     </div>
 













    </div>

     
   </div>

<div className="flex flex-row items-center justify-center
space-x-2 text-white text-sm py-3">

  <UilSun/>
<p className="font-light">Rise:
<span className='font-medium ml-1'>{DateTime.fromSeconds(sunrise).setZone(timezone).toFormat(format)}</span></p>
<p className='font-light'>|</p>

<UilSunset/>
<p className="font-light">Set:
<span className='font-medium ml-1'>{DateTime.fromSeconds(sunset).setZone(timezone).toFormat(format)}</span></p>
<p className='font-light'>|</p>

<UilSun/>
<p className="font-light">High:
<span className='font-medium ml-1'>{`${(temp_max-273).toFixed()}°C`}</span></p>
<p className='font-light'>|</p>


<UilSun/>
<p className="font-light">Low:
<span className='font-medium ml-1'>{`${(temp_min-273).toFixed()}°C`}</span></p>




</div>


  </>
  )
}

export default Tem
