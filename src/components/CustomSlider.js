import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/slider1.jpg';
import image2 from '../images/slider2.jpg';
import image3 from '../images/slider3.jpg';
import image4 from '../images/slider4.jpg';
import '../styles/slider.css'
const CustomSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...sliderSettings} className='slider-container'>
      <div className="slider-item">
        <img src={image1} alt="1" className="img-fluid" />
      </div>
      <div className="slider-item">
        <img src={image2} alt="2" className="img-fluid" />
      </div>
      <div className="slider-item">
        <img src={image3} alt="3" className="img-fluid" />
      </div>
      <div className="slider-item">
        <img src={image4} alt="4" className="img-fluid" />
      </div>
    </Slider>
  );
};

export default CustomSlider;
