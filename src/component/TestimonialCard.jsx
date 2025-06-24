import React from 'react';
import pic from '../assets/hero.png'
import Image_2 from '../assets/mapYourSuccess.png'

const TestimonialCard = () => {
  return (
    <div className="min-h-screen flex  items-center justify-center px-4 py-10 mx-40">
      <div className=" bg-white flex flex-row gap-9 text-center md:text-left">
        
       <img
            src={pic}
            alt="Testimonial"
            className="w-[620px] h-[664px] object-cover rounded-2xl bg-white"
          />

        {/* Content Section */}
        <div className="flex flex-col gap-4">
          <footer className='text-gray-300 border-b-2 mb-14'> </footer>
          <blockquote className="text-2xl md:text-[30px] text-black leading-relaxed font-medium tracking-tight mb-8 ">
            "I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it."
          </blockquote>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold text-gray-800">John Smith</span>
            <span className="text-base text-gray-500 font-normal">Head of Data</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
