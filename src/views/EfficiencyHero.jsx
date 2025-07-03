import React from "react";
import StatChart from "../assets/StatChart.png";
const Hero = () => {
  return (
    <>
      <div className=" font-times relative z-10 max-w-7xl mx-auto px-6 py-20 text-center  ">
        <h1 className="text-9xl md:text-9xl font-bold  leading-tight">
          Browse everything.
        </h1>
      </div>
      <div className="flex items-center justify-center  bg-gradient-to-br mt-40">
        <div className="relative w-[90%] max-w-[1900px] h-[400px] bg-[#8a9977] rounded-[40px] overflow-visible">
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1000px] h-[140%] bg-center bg-cover bg-no-repeat rounded-[20px] shadow-2xl z-20"
            style={{ backgroundImage: `url(${StatChart})` }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Hero;
