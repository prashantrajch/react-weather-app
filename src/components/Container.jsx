import React, { useState } from "react";
import Header from "./Header";
import InputPart from "./InputPart";
import WeatherCard from "./WeatherCard";
function Container() {
  const [weatherData, setWeatherData] = useState("");

  return (
    <div className="w-[400px] bg-white rounded-lg pb-1">
      <Header getWeatherData={setWeatherData} />
      {!weatherData ? (
        <InputPart getWeatherData={setWeatherData} />
      ) : (
        <WeatherCard data={weatherData} />
      )}
    </div>
  );
}

export default Container;
