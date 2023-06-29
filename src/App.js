
import './App.css';

import Homer from './Homer'
import Home from './Home';

import Time from './Time';
import Tem from './Tem';
import Forecast from './Forecast';
import Input from './Input';
import {getFomratweatherdata }from './Javs';
import { useEffect, useState } from 'react';
function App() {

const [query,setQuery] = useState({q:'tokyo'})
const [units,setUnits] = useState('metric')
const [weather,setWeather] = useState(null)

useEffect(()=>{
  const fetchweather = async ()=>{
    const data=await getFomratweatherdata(query,units).then((data)=>{
      setWeather(data)
      console.log(data)
    });
    
  
   }
  
  
   fetchweather();
},[query,units]);

// const formatB = ()=>{
  
//   if(weather.temp<=293){
//   return  "" ;}

//   else{
//   return "from-yellow-500 to-orange-500"}
// }



  return (
 <>
 <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl 
 shadow-gray-400 from-cyan-400 to-blue-600 `}>< Homer setQuery={setQuery}/>

{(weather && <div>
< Home setQuery={setQuery} units={units} setUnits={setUnits}/>
<Time weather={weather}/>
<Tem  weather ={weather}/></div>)
}

 </div>


 
 </>
  );
}

export default App;
