import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = ({ items, renderItem, settings }) => {
  const defaultSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 900, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
      // 🧩 Add a safety breakpoint for any width smaller than 480
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };
  useEffect(() => {
    console.log("Viewport width:", window.innerWidth);
  }, []);
  // ✅ Merge settings safely without wiping breakpoints
  const mergedSettings = {
    ...defaultSettings,
    ...settings,
    responsive: [
      ...(defaultSettings.responsive || []),
      ...(settings?.responsive || []),
    ],
  };

  // ✅ React Slick sometimes needs a forced resize
  useEffect(() => {
    const fix = setTimeout(
      () => window.dispatchEvent(new Event("resize")),
      500
    );
    return () => clearTimeout(fix);
  }, []);

  return (
    <Slider {...mergedSettings}>
      {items.map((item, i) => (
        <div key={i}>{renderItem(item)}</div>
      ))}
    </Slider>
  );
};

export default Carousel;
