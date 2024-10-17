import React from 'react';
import '../css/banner.css'
import slide1 from '../images/slide-show-1.jpg'
import slide2 from '../images/slide-show-2.png'
import slide3 from '../images/slide-show-3.png'
import slide4 from '../images/slide-show-4.png'
import slide5 from '../images/slide-show-5.png'
import slide6 from '../images/slide-show-6.png'
import slide7 from '../images/slide-show-7.png'
import slide8 from '../images/slide-show-8.png'

function Banner() {
  return (
    <div className="container">
      <div id="banner" className="banner">
        <div className="slider-wrapper">
          <div className="slider">
            <img
              id="slide-1"
              className="banner-image"
              src={slide1}
              alt=""
            />
            <img
              id="slide-2"
              className="banner-image"
              src={slide2}
              alt=""
            />
            <img
              id="slide-3"
              className="banner-image"
              src={slide3}
              alt=""
            />
            <img
              id="slide-4"
              className="banner-image"
              src={slide4}
              alt=""
            />
            <img
              id="slide-5"
              className="banner-image"
              src={slide5}
              alt=""
            />
            <img
              id="slide-6"
              className="banner-image"
              src={slide6}
              alt=""
            />
            <img
              id="slide-7"
              className="banner-image"
              src={slide7}
              alt=""
            />
            <img
              id="slide-8"
              className="banner-image"
              src={slide8}
              alt=""
            />
          </div>
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
            <a href="#slide-4"></a>
            <a href="#slide-5"></a>
            <a href="#slide-6"></a>
            <a href="#slide-7"></a>
            <a href="#slide-8"></a>
          </div>
        </div>
        <div className="ayahs">
          <div className="ayah-arabic">
            اِنَّمَا الۡمُؤۡمِنُوۡنَ اِخۡوَةٌ فَاَصۡلِحُوۡا بَيۡنَ اَخَوَيۡكُمۡ
          </div>
          <div className="ayah-english">
            The believers are but one brotherhood, so make peace between your
            brothers
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;