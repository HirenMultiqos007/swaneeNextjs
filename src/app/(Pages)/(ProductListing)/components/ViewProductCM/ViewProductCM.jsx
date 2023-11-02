"use client";
import React, { useEffect, useState } from "react";
import BlackLogo from "public/assets/images/BlackLogo.svg";
import ActionIcon from "public/assets/icons/actionIcon.svg";
import Link from "next/link";
import ProductZoom from "./innerComponents/ProductZoom/ProductZoom";
import { Container, Tab, Tabs } from "react-bootstrap";
import Specification from "./innerComponents/Specification/Specification";
import Reviews from "./innerComponents/ Reviews/ Reviews";
import { ProductListThunk } from "@/app/Redux-Toolkit/Thunks/ProductThunk";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import ProductCardCM from "@/app/components/ProductCardCM/ProductCardCM";

const ViewProductCM = ({ viewProduct,SC_ID }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: false,
        },
      },
    ],
  };
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [viewId, setViewId] = useState(viewProduct?.addVariant?.[0]?._id);
  const [viewSizeId, setViewSizeId] = useState(
    viewProduct?.addVariant?.[0]?.variantList?.[0]?.sizeId
  );
  const dispatch = useDispatch()
  const {productsList} = useSelector((e)=>e.Product)
    useEffect(()=> {
      dispatch(ProductListThunk({
        payload : {
          categoryId:SC_ID
        }
      }))
    },[])
  return (
    <>
      {viewProduct === null && (
        <div className="nullProduct">
          <div className="site-logo-box">
            <img src={BlackLogo.src} alt="logo" className="Blacklogo" />
          </div>
          <img src={ActionIcon.src} alt="logo" className="action-icon" />
          <h4> Looking for something? </h4>
          <p>
            {" "}
            We're sorry. The Web address you entered is not a functioning page
            on our site.{" "}
          </p>
          <Link href="/"> Click here to go back to the Swanee home page</Link>
        </div>
      )}
      <div className="pb-50">
        {viewProduct && (
          <ProductZoom
            viewId={viewId}
            setViewId={setViewId}
            viewSizeId={viewSizeId}
            setViewSizeId={setViewSizeId}
            viewProduct={viewProduct}
            setColor={setColor}
            setSize={setSize}
            color={color}
            size={size}
          />
        )}
      </div>
      {viewProduct && productsList && (
        <div className="product-features ptb">
          <Container>
            <Tabs defaultActiveKey="specifications" id="noanim-tab-example">
              <Tab eventKey="specifications" title="Specifications">
                <Specification viewProduct={viewProduct} />
              </Tab>
              <Tab eventKey="reviews" title="Reviews">
                <Reviews  viewProduct={viewProduct} />
              </Tab>
            </Tabs>
          </Container>
        </div>
      )}
        {productsList?.length !== 0 && viewProduct && (
        <div className="similar-product ptb">
          <Container>
            <div className="title-wraper">
              <h2>Similar Products</h2>
              <div
                className="custom-link view-link"
                onClick={() => navigate(`/productlisting/Similar Products`)}
              >View All</div>
            </div>
            <div className="custom-slider">
              <Slider
                {...settings}
                slidesToShow={
                  productsList?.length > 4 ? 4 : productsList?.length
                }
                slidesToScroll={
                  productsList?.length > 4 ? 4 : productsList?.length
                }
              >
                {productsList?.map((list, index) => {
                  return <ProductCardCM data={list} productDetails />;
                })}
              </Slider>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default ViewProductCM;
