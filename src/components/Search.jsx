import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";


function Search({cityName}) {

    const[inputValue,setInputValue] = useState('');

    function handleChange(e){
        setInputValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        cityName(inputValue);
        setInputValue('');
    }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
        <input
          type="text"
          placeholder="Enter city name"
          className="w-full h-14 rounded-lg text-lg leading-none text-center border outline-none border-[#bfbfbf] focus:border-2 focus:border-[#43affc] valid:border-2 valid:border-[#43affc]"
          required
          value={inputValue}
          onChange={handleChange}
        />
        <button className=" w-full sm:w-16 flex items-center justify-center h-14 rounded-lg text-lg leading-none text-center border outline-none bg-[#43affc]/80 text-white hover:bg-[#43affc]">
          <LuSearch size={"1.4em"} />
        </button>
      </div>
    </form>
  );
}

export default Search;
