import React from "react";

const Size = ({ viewProduct, viewId, viewSizeId, setViewSizeId }) => {
  return (
    <div className="filter-box">
      <div className="filter-header">
        <div className="filter-title">Size</div>
      </div>

      <div className="filter-list">
        <ul className="size-list">
          {viewProduct &&
            viewProduct?.map((viewSizeData, index) => {
              return (
                viewId === viewSizeData?._id &&
                viewSizeData?.variantList?.map((viewSize, i) => {
                  return (
                    <li
                      key={viewSize?.sizeId}
                      onClick={() => {
                        setViewSizeId && setViewSizeId(viewSize?.sizeId);
                      }}
                      className={
                        viewSizeId === viewSize?.sizeId ? "active" : null
                      }
                    >
                      {viewSize?.size}
                    </li>
                  );
                })
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Size;
