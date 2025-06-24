import React from 'react';
import DiscoverButton from '../tools/button'

const WhyChooseArea = ({  }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-20 text-[#333] font-sans">
      <div className="text-center mb-16">
        <footer className='text-gray-300 border-b-2 mb-14'> </footer>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-5">Why Choose Area?</h1>
        <p className="text-base text-[#666] max-w-xl mx-auto mb-8 leading-relaxed">
          You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamlining your business.
        </p>
        <div className="flex justify-center">
          <DiscoverButton/>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#fafafa] border-b-2 border-gray-200">
          <div className="text-center font-semibold text-lg text-[#1a1a1a] py-6">Area</div>
          <div className="text-center font-semibold text-lg text-[#1a1a1a] py-6">WebSurge</div>
          <div className="text-center font-semibold text-lg text-[#1a1a1a] py-6">HyperView</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Area Column */}
          <div className="border-r border-gray-200 bg-[#fafffe]">
            {[
              "Ultra-fast browsing",
              "Advanced AI insights",
              "Seamless integration",
              "Advanced AI insights",
              "Ultra-fast browsing",
              "Full UTF-8 support",
            ].map((text, i) => (
              <div key={i} className="flex items-center px-6 py-5 border-b border-gray-100 text-sm">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* WebSurge Column */}
          <div className="border-r border-gray-200 bg-[#fdfdfd]">
            {[
              ["✓", "Fast browsing"],
              ["✓", "Basic AI recommendations"],
              ["✓", "Restricts customization"],
              ["✗", "Basic AI insights"],
              ["✓", "Fast browsing"],
              ["✗", "Potential display errors"],
            ].map(([icon, text], i) => (
              <div key={i} className="flex items-center px-6 py-5 border-b border-gray-100 text-sm">
                <span className={`font-bold mr-3 ${icon === "✓" ? "text-green-600" : "text-red-500"}`}>
                  {icon}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* HyperView Column */}
          <div className="bg-[#fdfdfd]">
            {[
              "Moderate speeds",
              "No AI assistance",
              "Steep learning curve",
              "No AI assistance",
              "Moderate speeds",
              "Partial UTF-8 support",
            ].map((text, i) => (
              <div key={i} className="flex items-center px-6 py-5 border-b border-gray-100 text-sm">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseArea;
