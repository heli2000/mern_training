import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../Images/slider1.jpg";
import Slider2 from "../../Images/slider2.jpg";
import Slider3 from "../../Images/slider3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export const CarouselImage = () => {
  return (
    <div className="home-page-carousel">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
