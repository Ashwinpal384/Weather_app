import React, { useState } from 'react'
import {UilSearch,UilLocationPoint} from "@iconscout/react-unicons";
export default function Home({setQuery,units, setUnits}) {
const [city,setCity]= useState("");
const searchClick =()=>{
  if(city!=='') setQuery({q:city})
}

const handleunits = (e)=>{
 const selec = e.currentTarget.name;
 if(units===selec) setUnits(selec);
};
const handlelocation = ()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      setQuery({
        lat,lon
      });
    })
  }
}
  return (
    <div className=' flex flex-row justify-center my-6'>
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 border-radius:24px ">
        <input type="text" className='text-m font-light p-2 w-full shadow-xl  focus:outline-none capitalize placeholder:lowercase rounded-full'
        value={city} onChange={(e)=>setCity(e.currentTarget.value)} placeholder='search for city...'/>
     <UilSearch size={35}  className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={searchClick} />
     <UilLocationPoint size={35} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handlelocation}/>
      </div>
   {/* <div className="flex flex-row w-1/4 items-center justify-center">
  <button name='metric' className='text-xl text-white font-bold transition ease-out hover:scale-125 'onClick={handleunits}>°C</button>
<p className='text-xl text-white font-light'> / </p>
<button name='imperial' className='text-xl text-white font-bold transition ease-out hover:scale-125'onClick={handleunits}>°F</button>
   </div> */}




    </div>
  )
}
