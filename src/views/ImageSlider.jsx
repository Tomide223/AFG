import React, { useState } from "react"
import Image_1 from '../assets/hero.png'
import Image_2 from '../assets/mapYourSuccess.png'
import Image_3 from '../assets/statChart.png'
import '@fortawesome/fontawesome-free/css/all.min.css'

const images = [
    Image_1,
    Image_2,
    Image_3,
]
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="relative max-w-7xl mx-auto  overflow-hidden rounded-[24px] border border-white ">
       <button onClick={prevSlide} className="absolute right-2 top-8  w-10 h-10 bg-white px-3 py-1 ml-2 rounded-[12px] shadow ">
         <i className="fas fa-angle-right"></i>

      </button>
      <button onClick={nextSlide} className="absolute right-11 top-8  w-10 h-10 bg-white px-3 py-1  mr-2 rounded-[12px] shadow ">
        <i className="fas fa-angle-left"></i>
      </button>
      <img src={images[current]} alt={`Slide ${current}`} className="w-full h-full object-cover" />

     
    </div>
  );
}

export default ImageSlider






