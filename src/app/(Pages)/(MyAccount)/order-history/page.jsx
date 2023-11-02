"use client";
import Image from "next/image";
import React, { useState } from "react";
import FilterIcon from "public/assets/icons/filter-icon.svg";
import PlusIcon from "public/assets/icons/black-plus-icon.svg";
import WhiteCrossIcon from "public/assets/icons/white-cross-icon.svg";
import CrossIcon from "public/assets/icons/cross-icon.svg";
import { OrderDetailData } from "@/app/components/Data/data";
import OrderDetail from "./components/OrderDetail/OrderDetail";

const OrderHistory = () => {
  const [isActive, setIsActive] = useState("");
  const [isFilterActive, setFilterActive] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);

  const addfilterclass = () => {
    setIsActive(`is-active`);
  };
  const addfilterlistclass = () => {
    setFilterActive((e) => !e);
  };
  const removefilterclass = () => {
    setIsActive("");
  };

  return (
    <div className="table-content">
      <div className="title-wraper">
        <div className="table-title">Order History</div>
        <div className="icon-wrapper" onClick={addfilterclass}>
          <Image src={FilterIcon} alt="FilterIcon" />
          <span>Filter</span>
        </div>
      </div>

      <div className={`title-wraper filter-wrape ${isActive}`}>
        <ul className="filter-list">
          <li
            className={`graybg ${isFilterActive ? "active" : ""}`}
            onClick={addfilterlistclass}
          >
            <span>On the way</span>

            <Image src={PlusIcon} className="plus-icon" alt="PlusIcon" />
            <Image
              src={WhiteCrossIcon}
              className="WhiteCrossIcon"
              alt="WhiteCrossIcon"
            />
          </li>
          <li
            className={`graybg ${isDelivered ? "active" : ""}`}
            onClick={(e) => {
              setIsDelivered((e) => !e);
            }}
          >
            <span>Delivered</span>

            <Image src={PlusIcon} className="plus-icon" alt="PlusIcon" />
            <Image
              src={WhiteCrossIcon}
              className="WhiteCrossIcon"
              alt="WhiteCrossIcon"
            />
          </li>
        </ul>

        <div className="clear-list">
          <span onClick={() => clearFilter()}> Clear Filters</span>
          <div className="icon-wrapper" onClick={removefilterclass}>
            <Image src={CrossIcon} alt="CrossIcon" />
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        <OrderDetail
          data={OrderDetailData}
          isDelivered={isDelivered}
          setIsDelivered={setIsDelivered}
          isFilterActive={isFilterActive}
          setFilterActive={setFilterActive}
        />
      </div>
    </div>
  );
};

export default OrderHistory;
