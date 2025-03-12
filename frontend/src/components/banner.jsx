import React from 'react';
import '../css/banner.css'
import slide1 from '../images/slide-show-1.png'
import slide2 from '../images/slide-show-2-2.png'
import slide3 from '../images/slide-show-3.jpg'
import slide4 from '../images/slide-show-4.png'
import slide5 from '../images/slide-show-5.png'
import slide6 from '../images/slide-show-6.png'
import slide7 from '../images/slide-show-7.png'
import slide8 from '../images/slide-show-8.png'

const pictures = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8]

function Banner() {
  return (
    // <div className="banner-container">
      <div id="banner" className="banner-homepage">
        {/* <div className="slider-wrapper"> */}
          <div className="slider">
          {pictures.map((picture, index) => (
            <img
            id={`slide-${index + 1}`}
            className="banner-image"
            src={picture}
            alt=""
            />
          ))}
          </div>
          <div className="slider-nav">
            {pictures.map((_, index) => (
              <a 
                key={index}
                href={`#slide-${index + 1}`} 
                aria-label={`Go to slide ${index + 1}`}
              ></a>
            ))}
          </div>
          {/* <div className="slider-nav">
            <a href="#slide-1" aria-label="Go to slide 1"></a>
            <a href="#slide-2" aria-label="Go to slide 2"></a>
            <a href="#slide-3" aria-label="Go to slide 3"></a>
            <a href="#slide-4" aria-label="Go to slide 4"></a>
            <a href="#slide-5" aria-label="Go to slide 5"></a>
            <a href="#slide-6" aria-label="Go to slide 6"></a>
            <a href="#slide-7" aria-label="Go to slide 7"></a>
            <a href="#slide-8" aria-label="Go to slide 8"></a>
          </div> */}
        {/* </div> */}
        <div className="ayahs">
          <h3 className="ayah-arabic">
          وَٱصْبِرْ نَفْسَكَ مَعَ ٱلَّذِينَ يَدْعُونَ رَبَّهُم بِٱلْغَدَوٰةِ وَٱلْعَشِىِّ يُرِيدُونَ وَجْهَهُۥ ۖ
          </h3>
          <h3 className="ayah-english">
          And patiently stick with those who call upon their Lord morning and evening, seeking His pleasure
          </h3>
        </div>
      </div>
    // </div>
  );
}

export default Banner;