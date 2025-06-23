import React from 'react';
import StatChart from '../assets/StatChart.png';
const Hero = () => {
  return (
    <>
    <div className=" font-times relative z-10 max-w-7xl mx-auto px-6 py-20 text-center mb-16">
    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
      Browse everything.
    </h1>
  </div>
  <div className="flex justify-center">
   <div className="bg-[#8DA57A] p-6 rounded-lg inline-block">
      <img
        src={StatChart} className=""/>
    </div>
    </div>
    </>
  )
}
export default Hero