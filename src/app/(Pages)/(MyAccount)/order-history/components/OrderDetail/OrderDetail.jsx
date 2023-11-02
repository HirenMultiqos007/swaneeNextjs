"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image'

const OrderDetail = ({
  data,
  isDelivered,
  setIsDelivered,
  isFilterActive,
  setFilterActive,
}) => {
  const [imagezoom, setImagZoom] = useState(null);
  const [show, setShow] = useState(false);
  let [delivereddata, setDeliveredData] = useState([]);
  let [ontheway, setOnTheWay] = useState([]);
  const ZoomImage = (image) => {
    setShow(true);
    setImagZoom(image);
  };
  useEffect(() => {
    if (isDelivered) {
      setDeliveredData(
        data.filter((el) => {
          return el.orderStatus === "Delivered";
        })
      );
    } else if (isFilterActive) {
      setOnTheWay(
        data.filter((el) => {
          return el.orderStatus === "Order Confirmed";
        })
      );
    } else {
      setDeliveredData([]);
      setOnTheWay([]);
    }
  }, [isDelivered, isFilterActive]);
  return (
    <ul className="order-details">
      {data?.map((od, i) => {
            return (
              <li key={i}>
                <div className="top-details">
                  <div className="order-id">
                    <span>Orders ID: </span>
                    {od.orderId}
                  </div>
                  <div className="delivery-date">
                    <span>
                    Expected Delivery Date:
                    </span>
                    {od.orderData}
                  </div>
                  <div
                    className={`status ${
                      od.orderStatus === "Delivered" ? "text-green" : ""
                    } `}
                  >
                    <span>Status: </span>
                    {od.orderStatus}
                  </div>
                </div>
                <div className="separate" />
                <div className="bottom-details">
                  <div className="product-details">
                    <div className="image-box">
                      <div className="image">
                        <Image
                          src={od.OrderImage}
                          alt="product-image"
                          onClick={() => ZoomImage(od.OrderImage)}
                        />
                      </div>
                      <div className="content">
                        <div className="product-name">{od.productName}</div>
                        <div className="code">
                          <span>
                          Code:
                          </span>
                          {od.orderHistoryCode}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="qty text-green">
                    <span className="text-green">
                      Qty:
                    </span>
                    {od.qty}
                  </div>
                  <div className="price">
                    <span>Price: </span>
                    {od.price}
                  </div>
                  <button
                    type="submit"
                    onClick={() => {
                      od.btnText === "Track Order" &&
                        navigate(`/trackorder/${new Date()}`);
                    }}
                    className={`order-btn ${
                      od.btnText === "ReOrder" ? "re-order" : "track-order"
                    }`}
                  >
                    {od.btnText || "Track Order"}
                  </button>
                </div>
              </li>
            );
          })}
    </ul>
  );
};

export default OrderDetail;
