import React from 'react'
const title=["Tokyo", "London", "Chicago","Korea","India"];

const Homer = ({setQuery}) => {


  return (
    <div className='flex items-center justify-around my-6'>
 <button className='text-white text-lg font-medium'onClick={()=>setQuery({q:title[0]})}>{title[0]}</button>
 <button className='text-white text-lg font-medium'onClick={()=>setQuery({q:title[1]})}>{title[1]}</button>
 <button className='text-white text-lg font-medium'onClick={()=>setQuery({q:title[2]})}>{title[2]}</button>
 <button className='text-white text-lg font-medium'onClick={()=>setQuery({q:title[3]})}>{title[3]}</button>
 <button className='text-white text-lg font-medium'onClick={()=>setQuery({q:title[4]})}>{title[4]}</button>


    </div>
  )
}

export default Homer
