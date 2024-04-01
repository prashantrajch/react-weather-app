import React, { useState } from "react";

function DeviceLocation({
  getWeatherData,
  APIKEY,
  getLocationError,
  getPending,
  getMsg,
  getError,
}) {
  function handleClick() {
    getError(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, getLocationError);
    } else {
      alert("Your browser not support geolocation api");
    }
  }

  function onSuccess(position) {
    const { latitude, longitude } = position.coords;
    fetchLocationApi(latitude, longitude);
  }

  async function fetchLocationApi(latitude, longitude) {
    getPending(true);
    getMsg("Getting weather Details.....");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${APIKEY}`
      );
      const result = await response.json();
      if (result.cod == "404") {
        throw result;
      }
      getPending(false);
      getMsg("");
      getWeatherData(result);
    } catch (err) {
      getPending(false);
      getLocationError(err);
    }
  }

  return (
    <button
      className="w-full h-14 rounded-lg text-lg leading-none text-center border-none outline-none bg-[#43affc] text-white"
      onClick={handleClick}
    >
      Get Device Location
    </button>
  );
}

export default DeviceLocation;
