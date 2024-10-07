import React, {useEffect} from "react";
import Card from "react-bootstrap/Card";
import File from "../assets/json/foundingteam.json";
import Button from "react-bootstrap/Card";
import { ReactComponent as Icon } from "../assets/svg/linkedin.svg";
import Slider from "react-slick";


function FoundingCards() {
  let file = File;
  const settings = {
    dots: true,
    speed: 500,
    // slidesToShow: 5,
    slidesToShow: file.length < 5 ? file.length : 5,
    slidesToScroll: 5,
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
    <div className="row d-flex text-center justify-content-center">
     <Slider {...settings} style={{transition:"0.3 ease-in-out"}}>
      {file.map((element, index) => (
        <Card className="mb-5" id="card" key={index}>
          <Card.Img
            id="cardbg"
            src="https://www.apikuslabs.com/image/personal_card.svg"
          ></Card.Img>
          <Button variant="primary" id="cardbtn">
            <a href={element.linkedin}>
              <Icon />
            </a>
          </Button>
          <Card.Img variant="top" src={element.img} id="cardimg" />
          <Card.Body>
            <Card.Title id="cardtitle">{element.name}</Card.Title>
            <Card.Text id="profile">{element.profile}</Card.Text>
            <Card.Text id="description">{element.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      </Slider>
    </div>
  );
}

export default FoundingCards;
