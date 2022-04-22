import React from "react";
import Slider from "react-slick";
import Wrap from "react-slick";
import sliderScale from "../images/slider-scale.jpg";
import sliderScales from "../images/slider-scales.jpg";
import sliderBadag from "../images/slider-badag.jpg";
import sliderBadging from "../images/slider-badging.jpg";

function Banner() {
  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider className="slider" {...settings}>
      <Wrap className="singleBanner">
        <a>
          <img alt="img_1" src={sliderScale} />
        </a>
      </Wrap>
      <Wrap className="singleBanner">
        <a>
          <img alt="img_1" src={sliderScales} />
        </a>
      </Wrap>
      <Wrap className="singleBanner">
        <a>
          <img alt="img_1" src={sliderBadag} />
        </a>
      </Wrap>
      <Wrap className="singleBanner">
        <a>
          <img alt="img_1" src={sliderBadging} />
        </a>
      </Wrap>
    </Slider>
  );
}

export default Banner;
