"use client";
import { ProductFilterThunk, ProductListThunk } from "@/app/Redux-Toolkit/Thunks/ProductThunk";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import FilterIcon from "public/assets/icons/filtericon.svg";
import ClearallFilter from "../ClearallFilter/ClearallFilter";
import Price from "../Price/Price";
import FilterCrossIcon from "public/assets/icons/gray-cross-icon.svg";
import ProductBanner from "public/assets/images/product-banner.png";

import FilterCM from "@/app/components/FilterCM/FilterCM";
import { useDispatch, useSelector } from "react-redux";
import ProductGallary from "../ProductGallary/ProductGallary";
import SelectedFilterDataCM from "../SelectedFilterDataCM/SelectedFilterDataCM";
import { decrypt } from "@/app/Crypto/function";
import { ProductListSuccess } from "@/app/Redux-Toolkit/Slices/ProductSlice";

const ProductList_Filter = ({SC_ID,categoryName}) => {
  const dispatch = useDispatch();
  const [curentPage, setCurentPage] = useState(1);
  const [activeFilter, setIsActiveFilter] = useState(null);
  const { activeCategory,selectedName } = useSelector((e) => e.Category);
  const { filterData, productsList } = useSelector((e) => e.Product);

  useEffect(()=> {
    if(activeCategory || SC_ID){
      dispatch(ProductListThunk({
        payload: {
          page: curentPage,
          limit: 10,
          search: "",
          sortBy: "",
          sortKey: "",
          mainCategoryId: activeCategory,
          categoryId: SC_ID ? SC_ID : "",
        },
      }))
      dispatch(ProductListSuccess([]))
    }
  },[activeCategory,SC_ID])
  useEffect(() => {
    if (activeCategory) {
      dispatch(ProductFilterThunk({ mainCategoryId: activeCategory }));
    }
  }, [activeCategory]);
  

  return (
    <>
      <div>
        <Container>
          {/* {ProductlistLoading && <Loader />} */}
          <Breadcrumb>
            <Breadcrumb.Item href="/swanee">Home</Breadcrumb.Item>
            {/* <Breadcrumb.Item href="/pernia">Listing</Breadcrumb.Item> */}
            <Breadcrumb.Item active>ALL</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
      <div className="product-listing-wrapper">
        <Container>
          <div className="filter-text">
            <img src={FilterIcon.src} alt="filter-icon" />
            Filter
          </div>
          <div
            className={
              activeFilter
                ? "product-listing-box filter-open"
                : "product-listing-box"
            }
          >
            <div className="filter-listing">
              <div
                className="filter-cross-icon"
                onClick={() => setIsActiveFilter(null)}
              >
                <img src={FilterCrossIcon.src} alt="FilterCrossIcon" />
              </div>
              <ClearallFilter />

              <div className="filter-wrapper">
                <FilterCM
                  title="category"
                  data={filterData?.category}
                  name="categoryName"
                  count="categoryCount"
                />

                <FilterCM
                  title="designer"
                  data={filterData?.designer}
                  name="sellerName"
                  ProductBanner
                  count="sellerCount"
                />
                <FilterCM title="size" data={filterData?.size} />
                <FilterCM title="color" data={filterData?.color} />

                <Price />

                <FilterCM
                  title="shippingTime"
                  data={filterData?.shippingTime}
                />
              </div>
            </div>

            <div className="product-right-content">
              <div className="product-list">
                <div className="product-banner">
                  <img src={ProductBanner.src} alt="ProductBanner" />
                </div>

                <div className="product-header">
                  <div className="title">
                   {categoryName ? categoryName : "ALL"}
                    <span>({productsList?.length} Products)</span>
                  </div>
                  {/* <HeaderSorting /> */}
                </div>

                <SelectedFilterDataCM />

                <ProductGallary productsList={productsList} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductList_Filter;
