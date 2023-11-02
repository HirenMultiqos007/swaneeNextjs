"use client";
import React, { useRef } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import WishListImage from "public/assets/images/image.svg";
import MyWishlistIcon from "public/assets/icons/black-wishlist-icon.svg";
import RatingIcon from "public/assets/icons/star.png";
import IconOffer from "public/assets/icons/icon-offer.svg";
import IconShare from "public/assets/icons/icon-share.svg";
import Image from "next/image";
import Slider from "react-slick";
import ProductCardCM from "@/app/components/ProductCardCM/ProductCardCM";
import SliderImage from "react-zoom-slider";
import ColorBox from "../ColorBox/ColorBox";
import Button from "@/app/components/Button/Button";
import { ToastContainer } from "react-toastify";
import Size from "../Size/Size";

const ProductZoom = ({
  viewProduct,
  setViewId,
  viewId,
  viewSizeId,
  setViewSizeId,
  color,
  size,
  setColor,
  setSize,
}) => {
  const toastId = useRef(null);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
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
    <Container>
      <Row>
        <Col lg="12">
          <Breadcrumb className="mb-30">
            <Breadcrumb.Item href="/swanee">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>kai nai </Breadcrumb.Item>
          </Breadcrumb>
        </Col>

        <Col xl="6" lg="12">
          <div className="product-image">
            {viewProduct &&
              viewProduct?.addVariant?.map((viewList, index) => {
                return (
                  <>
                    {viewId === viewList?._id && (
                      <div className="hover-icon">
                        <div className="gradiant-bg">
                          {viewList?.variantList?.map((wish) => {
                            return (
                              wish?.sizeId === viewSizeId &&
                              (wish?.isWishList ? (
                                <Image
                                  src={WishListImage.src}
                                  alt="WishListImage"
                                  width={19}
                                  height={17}
                                  onClick={(e) => {
                                    if (authToken && isLogin) {
                                      dispatch(
                                        addRemoveWishList({
                                          isWishList: false,
                                          _id: viewList?._id,
                                          sizeId: wish?.sizeId,
                                        })
                                      );
                                      dispatch({
                                        type: PRODUCT_WISHLIST_REMOVE,
                                        payload: {
                                          catalogId: decrypt(productId),
                                          variantId: viewList?._id,
                                          sizeId: viewSizeId,
                                        },
                                        callback: (e) => {
                                          toast.dismiss(toastId.current);
                                          toastId.current = successToast(e);
                                        },
                                      });
                                    } else {
                                      dispatch(userpopupShowingCount(1));
                                    }
                                  }}
                                />
                              ) : (
                                <Image
                                  src={MyWishlistIcon.src}
                                  alt="MyWishlistIcon"
                                  width={15.55}
                                  height={14}
                                  onClick={() => {
                                    //   if (authToken && isLogin) {
                                    dispatch(
                                      addRemoveWishList({
                                        isWishList: true,
                                        _id: viewList?._id,
                                        sizeId: wish?.sizeId,
                                      })
                                    );
                                    dispatch({
                                      type: PRODUCT_WISHLIST_ADD,
                                      payload: {
                                        catalogId: decrypt(productId),
                                        variantId: viewList?._id,
                                        sellingPrice:
                                          viewList?.variantList?.[0]
                                            ?.sellingPrice,
                                        sizeId: viewSizeId,
                                      },
                                      callback: (e) => {
                                        toast.dismiss(toastId.current);
                                        toastId.current = successToast(e);
                                      },
                                    });
                                    //   }
                                    //   else {
                                    dispatch(userpopupShowingCount(1));
                                    //   }
                                  }}
                                />
                              ))
                            );
                          })}
                        </div>
                      </div>
                    )}
                    {viewId === viewList?._id && (
                      <SliderImage data={viewList?.productImages} />
                    )}
                    <div className="custom-slider product-thum-slider desktop-none">
                      {viewId === viewList?._id && (
                        <Slider {...settings}>
                          {viewList?.productImages?.map((list, index) => {
                            return (
                              <ProductCardCM
                                data={list}
                                // toastId={toastId}
                                viewList={viewList}
                                zoomImages
                                viewSizeId={viewSizeId}
                              />
                            );
                          })}
                        </Slider>
                      )}
                    </div>
                  </>
                );
              })}
          </div>
        </Col>
        <Col xl="6" lg="12">
          <div className="product-detail">
            <div className="product-heading">
              <div className="title">{viewProduct?.productName}</div>
              <span className="subtitle">{viewProduct?.productName}</span>
            </div>
            <div className="rating-details">
              <span>
                {viewProduct?.rating}4
                <Image src={RatingIcon.src} alt="star" width={15} height={14} />
              </span>
              <span>{viewProduct?.subrating} Ratings</span>
            </div>
            <div className="share">
              <Image src={IconShare.src} alt="IconShare" width={13} height={10.97} />
              Share
            </div>

            {viewProduct?.addVariant?.map(
              (viewPriceData, index) =>
                viewId === viewPriceData?._id &&
                viewPriceData?.variantList?.map((viewPrice, i) => {
                  return (
                    viewSizeId === viewPrice?.sizeId && (
                      <>
                        <div className="price" key={i}>
                          <span className="original-price">
                            ₹ {formatNumber(viewPrice?.sellingPrice)}
                          </span>
                          {viewPrice?.mrp !== viewPrice?.sellingPrice && (
                            <span className="seller-price">
                              ₹ {formatNumber(viewPrice?.mrp)}
                            </span>
                          )}
                          {viewProduct?.offer && (
                            <span className="text-red">
                              {viewProduct?.offer}% OFF
                            </span>
                          )}
                        </div>
                        <span>Inclusive of all taxes</span>
                        {viewPrice?.availableQty > 0 &&
                          viewPrice?.availableQty < 20 && (
                            <div
                              className={
                                viewPrice?.availableQty > 5
                                  ? "stock"
                                  : "few-stock"
                              }
                            >
                              <p>
                                {/* {viewPrice?.availableQty === 0 && "Out of Stock"} */}
                                {viewPrice?.availableQty === 1 &&
                                  `Only ${viewPrice?.availableQty} Item Left`}
                                {viewPrice?.availableQty <= 5 &&
                                  viewPrice?.availableQty !== 0 &&
                                  viewPrice?.availableQty !== 1 &&
                                  `Only ${viewPrice?.availableQty} Items Left`}
                                {viewPrice?.availableQty > 5 &&
                                  `${viewPrice?.availableQty} Items Left`}
                              </p>
                            </div>
                          )}
                        <div className="product-filter">
                          {viewProduct?.addVariant && <h6>Color</h6>}
                          <ColorBox
                            viewProduct={viewProduct?.addVariant}
                            viewId={viewId}
                            setViewId={setViewId}
                            setViewSizeId={setViewSizeId}
                          />
                          {viewProduct?.addVariant && <h6>Select Your Size</h6>}
                          <Size viewProduct={viewProduct?.addVariant} viewId={viewId}
                            viewSizeId={viewSizeId}
                            setViewSizeId={setViewSizeId} />
                        </div>
                        <div
                          className={`${
                            viewPrice?.availableQty === 0
                              ? "button-wrap"
                              : "button-group"
                          }`}
                        >
                          <Button
                            commonClass={`common-btn ${
                              viewPrice?.availableQty === 0 && "out-of-stock"
                            }`}
                            text={
                              viewPrice?.availableQty === 0
                                ? "Out of Stock"
                                : "Buy Now"
                            }
                            type="Button"
                            // onClick={() => {
                            //   navigate(checkout);
                            // }}
                          />
                          {viewPrice?.availableQty !== 0 && (
                            <Button
                              commonClass={"common-btn border-btn"}
                              text={`${
                                viewPrice?.isCart ? "Go To Cart" : "Add To Cart"
                              }`}
                              type="Button"
                              // onClick={() => {
                              //   if (viewPrice?.isCart) {
                              //     navigate(mycart);
                              //   } else {
                              //     dispatch({
                              //       type: ADD_TO_CART,
                              //       payload: {
                              //         catalogId: viewProduct?.id,
                              //         variantId: viewPriceData?._id,
                              //         sizeId: viewSizeId,
                              //       },
                              //       callback: () => {
                              //         navigate(mycart);
                              //       },
                              //     });
                              //   }
                              // }}
                            />
                          )}
                          <ToastContainer ref={toastId} />
                        </div>
                      </>
                    )
                  );
                })
            )}

            <div className="product-offer">
              <h6 className="offer-head">
                Best Offers
                <Image src={IconOffer} alt="IconOffer" style={{ marginLeft: "10px" }} />
              </h6>
              <p>
                ShopMore30k
                <span
                  className="text-red"
                  onClick={() => {
                    handleCopy("ShopMore30k");
                  }}
                >
                  Copy Code
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    Shop for 7,905 more and get flat 3,000 OFF! Use coupon code
                    ShopMore30 (T&C Applied).
                  </span>
                </li>
              </ul>

              <p>ShopMore30k</p>
              <ul>
                <li>
                  <span>
                    Shop for 7,905 more and get flat 3,000 OFF! Use coupon code
                    ShopMore30k(T&C Applied).
                  </span>
                </li>
              </ul>

              <h6>
                Best Offers <span className="text-red">Know More</span>
              </h6>
              <span>If you find the product for less we’ll match it!</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductZoom;
