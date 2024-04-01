import React, { useEffect, useState } from "react";
import Search from "./Search";
import InfoError from "./InfoError";
import DeviceLocation from "./DeviceLocation";

function InputPart({ getWeatherData }) {
  const APIKEY = "dc34bebaa11536bf15c239e25e41db03";
  const [city, setCity] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  async function fetchWeatherData() {
    setPending(true);
    setMsg("Getting weather Details.....");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKEY}`
      );
      const result = await response.json();
      if (result.cod == "404") {
        throw result;
      }
      getWeatherData(result);
      setPending(false);
      setCity("");
    } catch (err) {
      setPending(false);
      onError(err);
    }
  }

  function onError(err) {
    console.log();
    setError(true);
    setMsg(err.message);
  }

  useEffect(() => {
    setError(false)
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div className="my-2 p-4">
      {error && (
        <InfoError
          showMsg={msg}
          styleChange={"text-[#721c24] border border-[#f5c6cb] bg-[#f8d7da]"}
        />
      )}
      {pending && (
        <InfoError
          showMsg={msg}
          styleChange={"text-[#0c5460] border border-[#bee5eb] bg-[#d1ecf1]"}
        />
      )}
      <Search cityName={setCity} />
      <div className="w-full h-px bg-[#ccc] my-6"></div>
      <DeviceLocation
        APIKEY={APIKEY}
        getWeatherData={getWeatherData}
        getLocationError={onError}
        getPending={setPending}
        getMsg={setMsg}
        getError={setError}
      />
    </div>
  );
}

export default InputPart;
