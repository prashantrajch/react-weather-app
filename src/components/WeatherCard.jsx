import React, { useEffect, useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BiSolidThermometer, BiSolidDropletHalf } from "react-icons/bi";

function WeatherCard({data} ) {
    const city = data.name;
    const country = data.sys.country;
    const{description,icon} = data.weather[0];
    const{feels_like,humidity,temp} = data.main;

  return (
    <div className="mt-8 flex items-center flex-col">
      <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="" className="max-w-32 w-full" />
      <div className="temp flex text-7xl font-medium">
        <span className="num font-bold">{Math.floor(temp)} </span>
        <span className="deg text-[40px] mt-2.5 mr-1">°</span>C
      </div>
      <div className="weather text-[21px] text-center mt-1.5 mb-4 mx-5">
        {description}
      </div>
      <div className="location flex items-center mb-[30px] text-2xl">
        <div className="icon mr-1.5"></div>
        <SlLocationPin className="mr-1.5" />
        <span>{city}, {country}</span>
      </div>
      <div className="bottomDetails w-full flex items-center justify-between border-t border-[#bfbfbf]">
        <div className="feels w-full flex items-center justify-center py-4">
          <BiSolidThermometer className="text-[#43affc] text-[40px]" />
          <div className="details">
            <div className="temp text-lg font-medium -mt-1">
              <span className="num">{Math.floor(feels_like)} </span>
              <span className="deg text-lg ">°</span>C
            </div>
            <p className="text-base -mt-1.5">Feels Like</p>
          </div>
        </div>
        <div className="humidity w-full flex items-center justify-center py-4 border-l border-[#bfbfbf] ">
          <BiSolidDropletHalf className="text-[#43affc] text-[40px]" />
          <div className="details">
            <span className="text-lg font-medium -mt-1">{humidity}</span>
            <p className="text-base -mt-1.5">Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
