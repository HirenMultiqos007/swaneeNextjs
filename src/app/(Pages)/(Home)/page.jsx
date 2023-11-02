"use client";
import React, { useEffect, useState } from "react";
import BannerImg from "public/assets/images/hero-banner.png";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import TopGallary from "./components/TopGallary/TopGallary";
import WeddingTales from "./components/WeddingTales/WeddingTales";
import ImageGallary from "./components/ImageGallary/ImageGallary";
import Buzz from './components/Buzz/Buzz'
import Offer from "./components/Offer/Offer";
import Instagram from './components/Instagram/Instagram'
import Services from './components/Services/Services'

const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    navs: true,
    speed: 500,
    
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="hero-banner">
        <Slider {...settings}>
          {Array.from({ length: 3 }, (_, index) => (
            <div className="hero">
              <div className="banner-desktop-none">
                <img src={BannerImg.src} alt="banner" />
              </div>
              <div
                className="image-wrapper banner-mobile-none"
                style={{ backgroundImage: `url(${BannerImg.src})` }}
              ></div>
              <Container>
                <Row>
                  <Col lg="6">
                    <div className="hero-content">
                      <div className="title">
                        End of Season SALE up to 80% off
                      </div>
                      <h1
                        dangerouslySetInnerHTML={{
                          __html: `End of Season <br/>  <span>SALE</span> up to <br/> 80% off`,
                        }}
                      ></h1>
                        <button type="submit" className="common-btn">
                      Shop Now
                    </button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </Slider>
      </div>
      <TopGallary/>
      <WeddingTales/>
      <ImageGallary/>
      <Offer/>
      <Buzz/>
      <Instagram/>
      <Services/>
    </>
  );
};

export default Home;
