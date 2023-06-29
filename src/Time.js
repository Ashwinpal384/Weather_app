import React from 'react'
import { DateTime } from "luxon";
import formatlocalt from './Javs';
const Time = ({weather:{country,name,dt,timezone,format="cccc,dd LLL yyyy' | Local time:'hh:mm a"}}) => {

  return (<>
   <div className='justify-center flex items-center my-6 '>
      <p className="text-white text-xl font-medium">
       {DateTime.fromSeconds(dt).setZone(timezone).toFormat(format)}
      </p>
      </div>
  
      <div className='justify-center flex items-center my-3 '>
      <p className="text-white text-3xl font-medium">
     {`${country},${name}`}
      </p>
      </div>
  </>
   
  )
}

export default Time