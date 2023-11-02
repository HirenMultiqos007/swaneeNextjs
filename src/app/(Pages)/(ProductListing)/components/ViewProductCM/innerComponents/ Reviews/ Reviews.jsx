"use client";
import { ProductReviewThunk } from "@/app/Redux-Toolkit/Thunks/ProductThunk";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";

const Reviews = ({ viewProduct }) => {
  const {ProductReviewData} = useSelector((e)=>e.Product)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      ProductReviewThunk({
          productId: viewProduct?.id,
      })
    );
  }, []);
  return (
    <Row>
        <Col lg="7">
          {ProductReviewData ? (
            <>
              <div className="review-title">{ProductReviewData?.length>3? "3": ProductReviewData?.length} Reviews</div>
              <ul>
                {ProductReviewData?.map((rc, i) => {
                  if(i<=2){
                  return (
                    <li className="review-box" key={i}>
                     
                      <div className="customer-image">
                        <img src={rc?.image} alt="" />
                      </div>
                      <div className="content">
                        <div className="name">{rc?.name}</div>
                        <div className="total-rating">
                          <Rating
                            halfStar={true}
                            halfStarCount={1}
                            halfStarFraction={0.5}
                            initialValue={rc?.rating}
                            transition={true}
                            fillColorArray={[
                              "#f17a45",
                              "#f19745",
                              "#f1a545",
                              "#f1b345",
                              "#f1d045",
                            ]}
                            size={24}
                            readonly
                          />
                        </div>
                        <p>{rc?.review}</p>
                      </div>
                    </li>
                  );
                  }
                })}
              </ul>
            </>
          ) : (
            <>
              <div className="review-title">No Reviews</div>
            </>
          )}
        </Col>

        <Col lg="5">
          {/* <ReviewForm /> */}
        </Col>
      </Row>
  );
};

export default Reviews;
