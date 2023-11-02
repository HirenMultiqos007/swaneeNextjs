"use client";
import React, { useEffect } from "react";
import ProductCardCM from "../../../../components/ProductCardCM/ProductCardCM";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { ProductListThunk } from "@/app/Redux-Toolkit/Thunks/ProductThunk";
import Slider from "react-slick";

const Offer = () => {
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
  const { activeCategory } = useSelector((e) => e.Category);
  const { productsList } = useSelector((e) => e.Product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (activeCategory) {
      dispatch(
        ProductListThunk({
          payload: {
            mainCategoryId: activeCategory,
          },
        })
      );
    }
  }, [activeCategory]);
  return (
    <div className="offer ptb">
      <Container>
        <div className="title-wraper">
          <h2>Offers From Discount</h2>
          <div
            className="custom-link view-link"
            // onClick={() => {
            //   navigate(productlisting, { state: "ALL" });
            // }}
          >
            View All
          </div>
        </div>
        <div>
          {productsList?.length === 0 && (
            <p className="no-data-found"> No data found</p>
          )}
          {productsList?.length <= 4 && (
            <div className="product-gallary-list">
              {productsList?.map((data, key) => {
                return <ProductCardCM data={data} Offer />;
              })}
            </div>
          )}
          {productsList?.length > 4 && (
            <div className="custom-slider">
              <Slider
                {...settings}
                // slidesToShow={productsList?.length > 4 ? 4 : productsList?.length}
                // slidesToScroll={
                //   productsList?.length > 4 ? 4 : productsList?.length
                // }
              >
                {productsList?.map((list, index) => {
                  return <ProductCardCM data={list} Offer />;
                })}
              </Slider>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Offer;
