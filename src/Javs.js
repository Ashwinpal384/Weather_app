import { DateTime } from "luxon";

const Api_key = "f30d09ad29e7d9d648597902c5a63ce0";
const Base = "https://api.openweathermap.org/data/2.5";
//
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}//

const getWeatherData = (infotype , searchParams)=>{
    const url = new URL(Base+"/"+infotype);
    url.search = new URLSearchParams({...searchParams,appid:Api_key})


    return fetch(url)
    .then((res)=>res.json())
    .then((data)=>data);
};

const formater = (data)=>{
    const {
     coord:{lat,lon},
     main:{temp,feels_like,temp_min,temp_max,humdity},
    name,
    dt,
    sys:{country,sunrise ,sunset},
    weather,
    wind:{speed}
 
 
 }
    =data
    const {main:details, icon}= weather[0];
    return{lat,lon,temp,feels_like , temp_max,temp_min,details,icon,humdity,speed,sunrise,sunset,weather,name,dt,country}
 };
 const fomrforecaster = (data)=>{
  let { timezone , daily, hourly} =data
  
  daily = daily?.slice(1,6).map(d=>{
    return{
        title:formatlocalt(d.dt, timezone, 'ccc'),
        temp:d.temp.day,
        icon: d.weather[0].icon
    
    
    }
  });

 hourly = hourly?.slice(1,6).map(d=>{
    return{
        title:formatlocalt(d.dt, timezone, 'hh:mm a'),
        temp:d.temp.day,
        icon: d.weather[0].icon
    
    
    }
  });

  return {timezone,daily,hourly}

 }

const getFomratweatherdata = async(searchParams )=>{
    const formatcurrweather = await getWeatherData('weather',searchParams).then(formater)
   
//   const {lat, lon} = formatcurrweather;

//   const fomrforecast = await getWeatherData("forecast",{
//     lat,lon,
//     exclude:"current,minutely,alerts",units:searchParams.units,
//   }).then(fomrforecaster);


// {...formatcurrweather,...fomrforecast}



    return formatcurrweather

}


const formatlocalt  =
 (secs, zone, format="cccc,dd LLL yyyy' | Local time:'hh:mm a")=> 
DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


const iconurl = (code)=>`http://openweathermap.org/img/wn/${code}@2x.png`;


export { getFomratweatherdata,formatlocalt,iconurl};