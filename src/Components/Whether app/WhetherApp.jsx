import React from 'react';
import './WhetherApp.css';
import search_icon from '../Assets/search.png';
import cloud_icon from '../Assets/cloud.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

export const WhetherApp = () => {
  let api_key = "19b267c2352d01674ad751815263b9a5";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")[0];
    if (element.value === "") {
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent")[0];
    const wind = document.getElementsByClassName("wind-rate")[0];
    const temperature = document.getElementsByClassName("whether-temp")[0];
    const location = document.getElementsByClassName("whether-location")[0];

    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/hr";
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    location.innerHTML = data.name;
  };

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='search' />
        <div className='search-icon' onClick={search}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className='whether-image'>
        <img src={cloud_icon} alt="" />
      </div>
      <div className='whether-temp'>24°C</div>
      <div className='whether-location'>London</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt="" />
          <div className='data'>
            <div className='humidity-percent'>64%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt="" />
          <div className='data'>
            <div className='wind-rate'>18 km/hr</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
