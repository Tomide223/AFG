import React from 'react';

const MapYourSuccess = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-10 py-16 bg-[#f8f8f8] font-serif text-gray-800">
      <div className="text-center mb-20 relative">
        <h1 className="text-4xl md:text-5xl font-normal text-[#2c3e50] mb-6 tracking-wide">
          Map Your Success
        </h1>
        <button
          className="bg-[#d4e6d4] text-[#4a6741] px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#4a6741] hover:text-white"
          id="discover-btn"
        >
          Discover More
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-[60px] mb-20">
        <div className="flex-1 text-left">
          <div className="text-[64px] md:text-[84px] font-light text-[#bbb] leading-none mb-5">01</div>
          <h3 className="text-lg font-semibold text-[#2c3e50] mb-4">Get Started</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            With our intuitive setup, you're up and running in minutes.
          </p>
        </div>

        <div className="flex-1 text-left">
          <div className="text-[64px] md:text-[84px] font-light text-[#bbb] leading-none mb-5">02</div>
          <h3 className="text-lg font-semibold text-[#3498db] mb-4">Customize and Configure</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Adapt Zira to your specific requirements and preferences.
          </p>
        </div>

        <div className="flex-1 text-left">
          <div className="text-[64px] md:text-[84px] font-light text-[#bbb] leading-none mb-5">03</div>
          <h3 className="text-lg font-semibold text-[#27ae60] mb-4">Grow Your Business</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Make informed decisions to exceed your goals.
          </p>
        </div>
      </div>

      <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-indigo-400 to-purple-600 rounded-[24px] shadow-2xl overflow-hidden">
        <img
          src='MapYourSuccess.png'
          alt="Landscape placeholder"
          className="w-full h-full object-cover rounded-[24px]"
        />
      </div>
    </div>
  );
};

export default MapYourSuccess;
