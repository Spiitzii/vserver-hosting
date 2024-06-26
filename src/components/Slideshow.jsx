import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  "https://img.freepik.com/premium-vector/cloud-technology-integrated-digital-web-concept-background_118331-876.jpg?text=Slide+1",
  "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?text=Slide+2",
  "https://img.freepik.com/premium-photo/imagery-dark-servers-data-center-room-with-computers-storage-systems-glowing-elements-generative-ai_438099-18188.jpg?text=Slide+3"
];

function Slideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow;
