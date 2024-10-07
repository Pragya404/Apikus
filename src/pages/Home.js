import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/Home.css";
import { ReactComponent as Value1 } from "../assets/svg/value1.svg";
import { ReactComponent as Value2 } from "../assets/svg/value2.svg";
import { ReactComponent as Value3 } from "../assets/svg/value3.svg";
import { ReactComponent as Value4 } from "../assets/svg/value4.svg";
import { ReactComponent as Value5 } from "../assets/svg/value5.svg";
import { ReactComponent as Value6 } from "../assets/svg/value6.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import InternCards from "../components/InternCards";
import FoundingCards from "../components/FoundingCards";
import AdvisorCards from "../components/AdvisorCards";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../style/Slick.css";
import "../style/Cards.css"
function Home() {
  // const SlideView = () => {
  //   const [currentPosition, setCurrentPosition] = useState(0);
  //   const containerRef = useRef(null);

  //   const handleMouseDown = (e) => {
  //     const startX = e.clientX;
  //     const startPosition = currentPosition;

  //     const handleMouseMove = (e) => {
  //       const deltaX = e.clientX - startX;
  //       setCurrentPosition(startPosition + deltaX);
  //     };

  //     const handleMouseUp = () => {
  //       window.removeEventListener("mousemove", handleMouseMove);
  //       window.removeEventListener("mouseup", handleMouseUp);
  //     };

  //     window.addEventListener("mousemove", handleMouseMove);
  //     window.addEventListener("mouseup", handleMouseUp);
  //   };
  // };
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <>
      <Navbar />
      <body>
        <div className="about_page">
          <div id="part1">
            <div className="container">
              <div className="row align-items-center about_page_section1">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5">
                  <h1>
                    Stay ahead with the ever-changing world of data privacy
                  </h1>
                  <p>
                    At Apikus, we revolutionize data privacy and governance,
                    ensuring compliance, protecting reputations, and upholding
                    the highest standards of data trust
                  </p>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  style={{ textAlign: "right" }}
                >
                  <img
                    src="https://www.apikuslabs.com/assets/images/v1/section200.png"
                    alt="section1image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container" id="part2">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img
                  src="https://www.apikuslabs.com/assets/images/v1/section201.png"
                  className="img-fluid"
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div>
                  <h5 className="mt-5">Company Overview</h5>
                  <h2>Apikus: The Pinnacle of Data Security</h2>
                  <p>
                    Derived from the Latin word “apicem,” meaning “the peak,”
                    APIKUS embodies the highest standard in data security. As a
                    SaaS company, sensitive information of users is specialized
                    in safeguarding. The mission is to empower startups with the
                    tools and knowledge necessary to protect user data and
                    achieve industry leadership.
                  </p>
                  <ul className="list-unstyled" id="list">
                    <div className="listitem">
                      <li>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                        Comprehensive Product Suite
                      </li>
                    </div>
                    <div className="listitem">
                      <li>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                        Focus on Evolving Regulations
                      </li>
                    </div>
                    <div className="listitem">
                      <li>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                        Integration of Advanced Technologies
                      </li>
                    </div>
                    <div className="listitem">
                      <li>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                        User-Centric Consent Management
                      </li>
                    </div>
                    <div className="listitem">
                      <li>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                        Automated Response Management for DSARs
                      </li>
                    </div>
                    <div className="listitem">
                      <li>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                        Audit Trails for Enhanced Accountability
                      </li>
                    </div>
                    <div className="listitem">
                      <li>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                        Scalable and Interoperable Solutions
                      </li>
                    </div>
                  </ul>

                  <button className="btns">Discover More</button>
                </div>
              </div>
            </div>
          </div>
          <div id="part3" className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="left">
                  <h5 className="mt-5">Brief overview of Team</h5>
                  <h2>A blend of Technical &amp; Business Expertise</h2>
                  <ul className="list-unstyled">
                    <li className="part3-li">
                      <div>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                      </div>
                      <p>
                        <b>Experienced Founders:</b> Over 15 years in fintech
                        and technology.
                      </p>
                    </li>
                    <li className="part3-li">
                      <div>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                      </div>
                      <p>
                        <b>Proven Success:</b> Demonstrated ability in
                        developing and scaling impactful B2C and B2B products.
                      </p>
                    </li>
                    <li className="part3-li">
                      <div>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                      </div>
                      <p>
                        <b>Regulatory Insight:</b> Comprehensive knowledge of
                        SEBI, NPCI, and RBI regulations.
                      </p>
                    </li>
                    <li className="part3-li">
                      <div>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                      </div>
                      <p>
                        <b>Strong GTM, Strategy, and Sales:</b> Expertise that
                        complements our technical capabilities.
                      </p>
                    </li>
                    <li className="part3-li">
                      <div>
                        <Icon
                          icon="charm:circle-tick"
                          style={{ marginRight: "10px" }}
                        />
                      </div>
                      <p>
                        <b>Strategic Advisory Board:</b>
                      </p>
                    </li>
                    <ul>
                      <li className="part3-li2">
                        Proficient in techno-legal matters.
                      </li>
                      <li className="part3-li2">
                        Specialization in cryptography research, including
                        metadata protection, oblivious RAMs, secure multi-party
                        computation, secure machine learning, data-leak-proof
                        systems, and cryptographic primitives.
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 right">
                <img
                  src="https://www.apikuslabs.com/assets/images/v1/section202.png"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div id="part4" className="container">
            <div className="container mt-5 align-items-center">
              <div className="row text-center align-items-center">
                <h2 className="text-center">
                  Core Values <br />
                  Streamline, Secure &amp; Govern Data
                </h2>

                <div className="container text-center" id="value-container">
                  <Slider
                    {...settings}
                    style={{ transition: "0.3 ease-in-out" }}
                  >
                    <div>
                      <Value1 className="values1" id="values" />
                    </div>
                    <div>
                      <Value2 className="values2" id="values" />
                    </div>
                    <div>
                      <Value3 className="values3" id="values" />
                    </div>
                    <div>
                      <Value4 className="values4" id="values" />
                    </div>
                    <div>
                      <Value5 className="values5" id="values" />
                    </div>
                    <div>
                      <Value6 className="values6" id="values" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div id="part5">
            <div className="partA container">
              <h2 className="text-center my-4 mt-5 mb-5">Our Advisors</h2>
              <AdvisorCards />
            </div>
            <div className="partB container">
              <h2 className="text-center pt-5 mt-5 mb-5">
                The Founding &amp; Management Team
              </h2>
              <FoundingCards />
            </div>
            <div className="partC container">
              <h2 className="text-center pt-5 mt-5 md-5">Our Interns</h2>
              <InternCards />
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default Home;
