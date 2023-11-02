import React from "react";
import { Container } from "react-bootstrap";
import Image from 'next/image';
import InstagramIcon  from "public/assets/icons/instagram-red-icon.svg";
import Slider from 'react-slick'
import ProductCardCM from '../../../../components/ProductCardCM/ProductCardCM'
import { instagram } from "../../../../components/Data/data";

const Instagram = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="shop-instagram ptb">
      <Container>
        <div className="insta-box">
          <div className="content">
            <Image src={InstagramIcon} alt="InstagramIcon" />
            {/* <InstagramIcon /> */}
            <div className="title">Shop Instagram</div>
            <button
              type="submit"
              className="common-btn"
              // onClick={() =>
              //   navigate(`productlisting/${t(
              //   "homepage.shopinstagaram.title"
              // )}`)
              // }
            >
              View All
            </button>
          </div>
          <div className="custom-slider">
          <Slider
              {...settings}
              // slidesToShow={productsList?.length > 4 ? 4 : productsList?.length}
              // slidesToScroll={
              //   productsList?.length > 4 ? 4 : productsList?.length
              // }
            >
                {instagram?.map((list, index) => {
                  return <ProductCardCM data={list} instagram />;
                })}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Instagram;
