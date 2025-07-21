// import React from 'react';
// import '../css/banner.css'
// import slide1 from '../images/slide-show-1.png'
// import slide2 from '../images/slide-show-2-2.png'
// import slide3 from '../images/slide-show-3.jpg'
// import slide4 from '../images/slide-show-4.png'
// import slide5 from '../images/slide-show-5.png'
// import slide6 from '../images/slide-show-6.png'
// import slide7 from '../images/slide-show-7.png'
// import slide8 from '../images/slide-show-8.png'

// const pictures = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8]

// function Banner() {
//   return (
//     // <div className="banner-container">
//       <div id="banner" className="banner-homepage">
//         {/* <div className="slider-wrapper"> */}
//           <div className="slider">
//           {pictures.map((picture, index) => (
//             <img
//             id={`slide-${index + 1}`}
//             className="banner-image"
//             src={picture}
//             alt=""
//             />
//           ))}
//           </div>
//           <div className="slider-nav">
//             {pictures.map((_, index) => (
//               <a 
//                 key={index}
//                 href={`#slide-${index + 1}`} 
//                 aria-label={`Go to slide ${index + 1}`}
//               ></a>
//             ))}
//           </div>
//           {/* <div className="slider-nav">
//             <a href="#slide-1" aria-label="Go to slide 1"></a>
//             <a href="#slide-2" aria-label="Go to slide 2"></a>
//             <a href="#slide-3" aria-label="Go to slide 3"></a>
//             <a href="#slide-4" aria-label="Go to slide 4"></a>
//             <a href="#slide-5" aria-label="Go to slide 5"></a>
//             <a href="#slide-6" aria-label="Go to slide 6"></a>
//             <a href="#slide-7" aria-label="Go to slide 7"></a>
//             <a href="#slide-8" aria-label="Go to slide 8"></a>
//           </div> */}
//         {/* </div> */}
//         <div className="ayahs">
//           <h3 className="ayah-arabic">
//           وَٱصْبِرْ نَفْسَكَ مَعَ ٱلَّذِينَ يَدْعُونَ رَبَّهُم بِٱلْغَدَوٰةِ وَٱلْعَشِىِّ يُرِيدُونَ وَجْهَهُۥ ۖ
//           </h3>
//           <h3 className="ayah-english">
//           And patiently stick with those who call upon their Lord morning and evening, seeking His pleasure
//           </h3>
//         </div>
//       </div>
//     // </div>
//   );
// }

// export default Banner;

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slide1 from "../images/slide-show-1.png"
import slide2 from "../images/slide-show-2-2.png"
import slide3 from "../images/slide-show-3.jpg"
import slide4 from "../images/slide-show-4.png"
import slide5 from "../images/slide-show-5.png"
import slide6 from "../images/slide-show-6.png"
import slide7 from "../images/slide-show-7.png"
import slide8 from "../images/slide-show-8.png"

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - replace with actual MSA images
  const images = [ slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8 ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-black p-12">
      <div className="relative h-[60vh] sm:h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="relative h-fit">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-[28rem] sm:h-screen sm:pt-0 sm:mt-14 pt-44 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`MSA Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Quran Verse Overlay */}
      <div className="absolute top-80 inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <div className="mb-44">
            <p className="text-md sm:text-3xl font-arabic leading-relaxed mb-4" dir="rtl">
              وَٱصْبِرْ نَفْسَكَ مَعَ ٱلَّذِينَ يَدْعُونَ رَبَّهُم بِٱلْغَدَوٰةِ وَٱلْعَشِىِّ يُرِيدُونَ وَجْهَهُۥ ۖ
            </p>
            <p className="text-xs md:text-xl font-light italic">
              "And patiently stick with those who call upon their Lord morning and evening, seeking His pleasure"
            </p>
         </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-1 w-fit h-12 top-[55%] transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-md transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 w-fit h-12 top-[55%] transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-md transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute scale-50 bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-red-900' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Banner;