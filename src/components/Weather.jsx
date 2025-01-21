import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import sunIcon from '../Assets/clear.png'
import humidity from '../Assets/humidity.png'
import wind from '../Assets/wind.png'
import searchBar from "../Assets/search.png"

const Weather = () => {
    const inputRef = useRef()
    const [weatherData,setWeatherData] = useState(()=> search('Tel Aviv'))
    async function search(city) 
     {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=109c6e254b48a94251d6a478b5cda502`
        try {
        const response = await fetch(url)
        const data = await response.json() 
    console.log(data)
    setWeatherData({

        location:data.name,
        windSpeed: data.wind.speed,
        humidity: Math.round(data.main.humidity),
        temperature: Math.round(data.main.temp),
        icon:`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


    })
    }
        catch(error)
        {
            
        }
}
// useEffect(()=>{
// search("Vienna")},[])
    return (
    <div className='weather'>
    <div className='search-bar'>
        <input type="text" ref={inputRef} placeholder='Search' />
        <img src={searchBar} onClick={() => search(inputRef.current.value)} alt="" />
    </div>
    <img className='weather-icon' src={weatherData.icon} alt="" />
    <p className='temperature'>{weatherData.temperature} C</p>
    <p className='location'>{weatherData.location}</p>
    <div className='weather-data'>
        <div className='col'>
            <img src={humidity} alt="" />
        <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
        </div>
        </div>
        <div className='col'>
            <img src={wind} alt="" />
        <div>
            <p>{weatherData.windSpeed} Km/h</p>
            <span>Wind Speed</span>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Weather
