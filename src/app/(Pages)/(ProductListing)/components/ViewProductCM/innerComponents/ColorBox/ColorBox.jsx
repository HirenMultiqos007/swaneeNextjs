"use client";
import React from "react";

const ColorBox = ({ viewProduct, viewId, setViewId, setViewSizeId }) => {
  return (
    <div className="filter-box">
      <div className="filter-header">
        <div className="filter-title">Color</div>
      </div>
      <div className="filter-list">
        <ul className="size-list color-list">
          {viewProduct?.map((colorData, index) => {
            // if(colorData?.status === 1){
            return (
              <li
                key={colorData?._id}
                id={colorData?._id}
                onClick={() => {
                  setViewId(colorData?._id);
                  setViewSizeId(colorData?.variantList?.[0]?.sizeId);
                }}
                className={viewId === colorData?._id ? "active" : null}
              >
                <div
                  className="circle"
                  style={{
                    backgroundColor: colorData?.color
                      ?.toLowerCase()
                      ?.replace(/-/g, ""),
                  }}
                ></div>
              </li>
            );
            // }
          })}
          {/* : colorList?.map((colorList,index)=>{
        return(
          <li
          key={index}
          className={(colorList?._id === first) ? "active" : null}
          onClick={()=> {
            setfirst(colorList?._id)
          }}
        >
          <div
            className="circle"
            style={{
              backgroundColor: colorList?.color?.toLowerCase()?.replace(/-/g, '')
            }}
          ></div>
        </li>
        )
      })} */}
        </ul>
      </div>
    </div>
  );
};

export default ColorBox;
