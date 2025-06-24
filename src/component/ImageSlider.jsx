import React, { useState } from "react"
import Image_1 from '../assets/hills.png'
import Image_2 from '../assets/picture.jpg'
import Image_3 from '../assets/react.svg'

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
    <div className="relative w-[660px] h-[684px] mx-auto overflow-hidden rounded-full">
      <img src={images[current]} alt={`Slide ${current}`} className="w-full h-full object-cover" />
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow">
        ❮
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow">
        ❯
      </button>
    </div>
  );
}

export default ImageSlider






