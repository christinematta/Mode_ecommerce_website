import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

const Carousel = ({ items, renderItem, settings }) => {
  const defaultSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
    {
      breakpoint: 1200, // when width < 1200px
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 900, // when width < 900px
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600, // when width < 600px
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 400, // when width < 400px
      settings: {
        slidesToShow: 1
      }
    }
  ],
    ...settings, // allow overriding
  };

  return (
    <Slider {...defaultSettings}>
      {items.map((item, i) => (
        <div key={i}>{renderItem(item)}</div>
      ))}
    </Slider>
  );
};

export default Carousel;
