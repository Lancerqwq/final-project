import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./style.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="root">
      <Slider className="arousel" {...settings}>
        <div className="imageWrap">
          <img
            className="carouselImage"
            src="http://rossiterbooks.co.uk/wp-content/uploads/2017/05/s2b.jpg"
            alt="carousel-1"
          />
        </div>
        <div className="imageWrap">
          <img
            className="carouselImage"
            src="https://wowslider.net/local-sliders/demo-9/data1/images/bookshelf349946_1280.jpg"
            alt="carousel-2"
          />
        </div>
        <div className="imageWrap">
          <img
            className="carouselImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyFxDTXaQGkbc9Xn3DLvGV5prIwD8Fbbl5Q&usqp=CAU"
            alt="carousel-3"
          />
        </div>
        <div className="imageWrap">
          <img
            className="carouselImage"
            src="https://voiceofwitness.org/wp-content/uploads/2016/03/Books-slider.jpg"
            alt="carousel-4"
          />
        </div>
      </Slider>
    </div>
  );
}
