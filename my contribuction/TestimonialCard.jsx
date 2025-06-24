import React from 'react';

const TestimonialCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl p-10 md:p-16 max-w-5xl w-full shadow-xl flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left">
        
        {/* Image Section */}
        <div className="w-full md:w-[300px]">
          <img
            src='./hero.png'
            alt="Testimonial"
            className="w-full h-[250px] md:h-[350px] object-cover rounded-2xl bg-gray-200"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <blockquote className="text-2xl md:text-[28px] text-gray-800 leading-relaxed font-normal tracking-tight mb-8">
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
