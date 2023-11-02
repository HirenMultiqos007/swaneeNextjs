"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import ProductList_Filter from "../components/ProductList_Filter/ProductList_Filter";
import ViewProductCM from "../components/ViewProductCM/ViewProductCM";
const layout = ({ children }) => {
  const query = useSearchParams();
  const categoryName = query.get("SB_NAME");
  return (
    <>
      {/* {CA_ID ? (
        <ViewProductCM CA_ID={CA_ID} />
      ) : (
        <ProductList_Filter SC_ID={SC_ID} categoryName={categoryName} />
      )} */}
      {children}
    </>
  );
};

export default layout;
