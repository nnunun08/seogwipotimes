import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

 function ImgSlider({obj}) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
    }
    return (
      <>
        <Slider {...settings}>
          {obj}
        </Slider>
      </>
    );
  }
export default ImgSlider