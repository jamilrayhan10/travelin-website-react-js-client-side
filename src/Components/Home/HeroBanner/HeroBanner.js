import React from "react";
import "./HeroBanner.css";
import { Carousel } from "react-bootstrap";
import slider1 from "../../images/sliderImg/slider1.jpg";
import slider2 from "../../images/sliderImg/slider2.jpg";
import slider3 from "../../images/sliderImg/slider3.jpg";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderimg"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Traveling</h3>
            <p>
              Traveling gives us information about the places which we visit. It
              reveals the secrets about that place. These secrets give me the
              ecstasies and revelations ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderimg"
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Traveling</h3>
            <p>
              Traveling is an exciting thing for lots of people. I love to
              travel a lot. Here are a few short and long essays on Travelling.
              You should share these essays ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderimg"
            src={slider3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Traveling</h3>
            <p>
              Traveling will be really easier for you because you will be able
              to connect with locals without having any problems. You will be
              confident when are skilled in a ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
