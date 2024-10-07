import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import File from "../assets/json/interns.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function InternCards() {
  let file = File;
  const settings = {
    dots: true,
    speed: 500,
    // slidesToShow: 6,
    slidesToShow: file.length < 5 ? file.length : 5,

    slidesToScroll: 2,
    infinite: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 320, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  console.log("InternCards component rendered");
  useEffect(() => {
    console.log("InternCards component mounted or updated");
  }, []);
  return (
    <div className="row d-flex text-center justify-content-center align-items-center">
      <Slider {...settings} style={{transition:"0.3 ease-in-out"}}>
        {file.map((element, index) => (
          <Card id="Icard" key={index}>
            <Card.Img
              className="col-12"
              variant="top"
              id="Icardimg"
              src={element.img}
            />
            <Card.Body>
              <Card.Title className="mt-2" id="Icardtitle">
                {element.name}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
     </Slider>
    </div>
  );
}

export default InternCards;
