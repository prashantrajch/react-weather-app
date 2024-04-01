import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function Header({getWeatherData}) {

  function handleBackClick(){
    getWeatherData('')
  }

  return (
    <header className="flex items-center p-4 border-b-2 border-[#bfbfbf] text-[#43affc]">
      <button className="mt-1" onClick={handleBackClick}>
        <IoIosArrowBack size={"1.5rem"} />
      </button>
      {/* <span className='leading-none'>Back </span> */}
      <h1 className="text-2xl font-semibold leading-none ml-2">Weather App</h1>
    </header>
  );
}

export default Header;
