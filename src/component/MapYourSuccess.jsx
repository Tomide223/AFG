import React from 'react';
import pic from "../assets/MapYourSuccess.png"
import Button from "../tools/button"
const MapYourSuccess = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-10 py-16  font-serif text-gray-800">
      <footer className='text-gray-300 border-b-2 mb-10'> </footer>
      <div className=" flex flex-row text-center mb-20 space-x-[500px]">
        
         <p className="text-4xl md:text-5xl font-normal text-[#2c3e50] mb-6 tracking-wide self-start">
          Map Your Success
        </p>
        <Button bg='[#bbb]' hover='bg-[#8E9C78]' aligment='justify-self-end' mt='mt-0'/>
       
        
        
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-[60px] mb-20">
        <div className="flex-1 text-left">
          <footer className='text-gray-300 border-b-2 mb-10'> </footer>
          <div className="text-[64px] md:text-[84px] font-light text-[#bbb] leading-none mb-5">01</div>
          <h3 className="text-lg font-medium  mb-4">Get Started</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            With our intuitive setup, you're up and running in minutes.
          </p>
        </div>

        <div className="flex-1 text-left">
          <footer className='text-gray-300 border-b-2 mb-10'> </footer>
          <div className="text-[64px] md:text-[84px] font-light text-[#bbb] leading-none mb-5">02</div>
          <h3 className="text-lg font-semibolb  mb-4">Customize and Configure</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Adapt Zira to your specific requirements and preferences.
          </p>
        </div>

        <div className="flex-1 text-left">
          <footer className='text-gray-300 border-b-2 mb-10'> </footer>
          <div className="text-[64px] md:text-[84px] font-light text-[#bbb] leading-none mb-5">03</div>
          <h3 className="text-lg font-semibold  mb-4">Grow Your Business</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Make informed decisions to exceed your goals.
          </p>
        </div>
      </div>

      <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-indigo-400 to-purple-600 rounded-[24px] shadow-2xl overflow-hidden">
        <img src={pic} alt="Landscape placeholder"
          className="w-full h-full object-cover rounded-[24px]" />
      </div>
    </div>
  );
};

export default MapYourSuccess;
