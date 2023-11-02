"use client"
import React, { useState } from "react";
import  WishListImage  from "public/assets/images/image.svg";

import MyWishlistIcon from "public/assets/icons/black-wishlist-icon.svg";
import StoreFillIcon from "public/assets/icons/store-fill-icon.svg";
import StoreIcon  from "public/assets/icons/store-icon.svg";
import { useDispatch, useSelector } from "react-redux";

import ImageLoder from "../ImageLoder";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { successToast } from "../ToastifyCM/Toastify";
// import Skeleton from "react-loading-skeleton";

const ProductCardCM = ({
  myWishList,
  instagram,
  viewSizeId,
  data,
  key,
  Offer,
  mycart,
  productDetails,
  zoomImages,
  viewList,
  productsList,
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = (f) => setHovered(f);
//   const navigate = useNavigate();
//   const { productId } = useParams();
//   const { ProductlistLoading } = useSelector((state) => state.ProductSlice);
//   const { authToken, isLogin, currentActiveModel } = useSelector(
//     (e) => e.AuthSlice
//   );
  const [activeWishList, setActiveWishList] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()
  const handleCart = (data) => {
    let cart = null;
    cart = {
      id: data?.id,
      productName: data?.productName,
      description: data?.description,
      color: data?.addVariant?.[0]?.color,
      colorId: data?.addVariant?.[0]?.colorId,
      productImages: data?.addVariant?.[0]?.productImages,
      productSku: data?.addVariant?.[0]?.productSku,
      // variantList:s,
      size: data?.addVariant?.[0]?.variantList?.[0]?.size,
      sellingPrice: data?.addVariant?.[0]?.variantList?.[0]?.sellingPrice,
      qty: 1,
      sizeId: data?.addVariant?.[0]?.variantList?.[0]?.sizeId,
      availableQty: data?.addVariant?.[0]?.variantList?.[0]?.availableQty,
      PLength: data?.addVariant?.[0]?.variantList?.[0]?.PLength,
      mrp: data?.addVariant?.[0]?.variantList?.[0]?.mrp,
      _id: data?.addVariant?.[0]?.variantList?.[0]?._id,
      orderSummary: true,
    };
    dispatch(getOderSummarySuccess(cart));
    return navigate(checkout);
  };
  return (
    <>
      <div
        className={`image-box ${hovered === key ? "isActive" : ""}`}
        onMouseEnter={() => toggleHover(key)}
        onMouseLeave={() => toggleHover(-1)}
      >
        {data?.availableQty > 0 && data?.discountInOne > "0" && (
          <div
            className={`offer-label ${
              data?.availableQty === 0 ? "" : "red-label"
            }`}
          >
            {data?.addVariant?.[0]?.discountInOne || data?.discountInOne}% OFF
          </div>
        )}
        <div
          className={`product-content ${
            data?.availableQty === 0 || data?.catalogStatus > 1
              ? "no-stock-available"
              : ""
          }`}
        >
          <div className="image-hover">
            <ImageLoder
              imageData={
                (zoomImages || instagram)
                  ? data?.image
                  : myWishList
                  ? data?.productImages
                  : data?.addVariant?.[0]?.productImages?.[0]?.image
              }
              onClick={() => {
                if (!(data?.catalogStatus > 1)) {
                  if (
                    data?.addVariant?.[0]?.productImages?.[0]?.image ||
                    data?.productImages
                  ) {
                      // window.open(`/swanee${productlisting}/${encrypt(data?.categoryId)}/${encrypt(
                      //   data?.id ? data?.id : data?.catalogId
                      // )}`, '_blank')
                      router.push(`/productlisting/${data?.categoryId}/${data?.id ? data?.id : data?.catalogId}`)
                    // navigate(
                    //   `${productlisting}/${encrypt(data?.categoryId)}/${encrypt(
                    //     data?.id ? data?.id : data?.catalogId
                    //   )}`,
                    //   {
                    //     state: {
                    //       spcVariant: data?.variantId
                    //         ? data?.variantId
                    //         : data?.addVariant?.[0]?._id,
                    //       wishListSizeID:
                    //         data?.addVariant?.[0]?.variantList?.[0]?.sizeId ||
                    //         data?.sizeId,
                    //     },
                        
                    //   }
                    // );
                  }
                }
              }}
            />
            {/* <img
              src={
                zoomImages
                  ? data?.image
                  : myWishList
                  ? data?.productImages
                  : data?.addVariant?.[0]?.productImages?.[0]?.image
              }
              alt="ProductImagess"
              onClick={() => {
                if (!(data?.catalogStatus > 1)) {
                  if (
                    data?.addVariant?.[0]?.productImages?.[0]?.image ||
                    data?.productImages
                  ) {
                    navigate(
                      `${productlisting}/${encrypt(data?.categoryId)}/${encrypt(
                        data?.id ? data?.id : data?.catalogId
                      )}`,
                      {
                        state: {
                          spcVariant: data?.variantId
                            ? data?.variantId
                            : data?.addVariant?.[0]?._id,
                          wishListSizeID:
                            data?.addVariant?.[0]?.variantList?.[0]?.sizeId ||
                            data?.sizeId,
                        },
                      }
                    );
                  }
                }
              }}
            /> */}
          </div>
          <div className="image-content">
            {data?.availableQty === 0 &&
              data?.catalogStatus === 1 &&
              data?.variantStatus === 1 && (
                <span className="out-of-stock-content"> Out of stock </span>
              )}
            {data?.catalogStatus > 1 && (
              <span className="out-of-stock-content"> Not Available </span>
            )}
            {(productDetails || Offer || mycart || instagram) && (
              <h5> {data?.productName} </h5>
            )}
            {(productsList || myWishList ) && <h6>{data?.productName}</h6>}
            {productsList && (
              <p>{`${data?.sellerName ? data?.sellerName : "-"}`} </p>
            )}
            {(productDetails || mycart || instagram) && <p>{data?.description}</p>}

            {myWishList && (
              <>
                <p>
                  <b> Color </b> : {data?.color}
                </p>
                <p>
                  <b> Size </b> : {data?.size}
                </p>
              </>
            )}
            {(mycart || productsList || productDetails || myWishList) && (
              <div className="price">
                {!myWishList && "Starting from"}
                <span className="original-price">
                  ₹
                  {data?.addVariant?.[0]?.variantList?.[0]?.sellingPrice ||
                    data?.sellingPrice}
                </span>
                <span className="seller-price">
                  ₹{data?.addVariant?.[0]?.variantList?.[0]?.mrp || data?.mrp}
                </span>
                {/* {myWishList && data?.discountInOne !== "0" && (
                  <span>({data?.discountInOne}% OFF)</span>
                )} */}
              </div>
            )}
            {Offer && (
              <>
                <button
                  type="submit"
                  className="custom-link"
                  onClick={() => {
                    handleCart(data);
                  }}
                >
                  Shop Now
                </button>
                <button type="submit" className="custom-link">
                  {data?.link}
                </button>
              </>
            )}
          </div>
        </div>
        {zoomImages && (
          <div className="hover-icon">
            <div className="gradiant-bg">
              {viewList && viewList?.variantList?.map((wish) => {
                return (
                  wish?.sizeId === viewSizeId &&
                  (wish?.isWishList ? (
                    <Image src={WishListImage} alt="WishListImage" />
                    // <WishListImage
                    //   onClick={(e) => {
                    //     if (authToken && isLogin) {
                    //       dispatch(
                    //         addRemoveWishList({
                    //           isWishList: false,
                    //           _id: viewList?._id,
                    //           sizeId: wish?.sizeId,
                    //         })
                    //       );
                    //       dispatch({
                    //         type: PRODUCT_WISHLIST_REMOVE,
                    //         payload: {
                    //           catalogId: decrypt(productId),
                    //           variantId: viewList?._id,
                    //           sizeId: viewSizeId,
                    //         },
                    //         callback: (e) => {
                    //           toast.dismiss(toastId.current);
                    //           toastId.current = successToast(e);
                    //         },
                    //       });
                    //     } else {
                    //       dispatch(userpopupShowingCount(1));
                    //     }
                    //   }}
                    // />
                  ) : (
                    <Image src={MyWishlistIcon} alt="MyWishlistIcon" />
                    // <MyWishlistIcon
                    //   onClick={() => {
                    //     if (authToken && isLogin) {
                    //       dispatch(
                    //         addRemoveWishList({
                    //           isWishList: true,
                    //           _id: viewList?._id,
                    //           sizeId: wish?.sizeId,
                    //         })
                    //       );
                    //       dispatch({
                    //         type: PRODUCT_WISHLIST_ADD,
                    //         payload: {
                    //           catalogId: decrypt(productId),
                    //           variantId: viewList?._id,
                    //           sellingPrice:
                    //             viewList?.variantList?.[0]?.sellingPrice,
                    //           sizeId: viewSizeId,
                    //         },
                    //         callback: (e) => {
                    //           toast.dismiss(toastId.current);
                    //           toastId.current = successToast(e);
                    //         },
                    //       });
                    //     } else {
                    //       dispatch(userpopupShowingCount(1));
                    //     }
                    //   }}
                    // />
                  ))
                );
              })}
            </div>
          </div>
        )}
        {myWishList && (
          <div className="hover-icon">
            <div className="gradiant-bg">
            <Image src={WishListImage} alt="WishListImage" />

              {/* <WishListImage
                // onClick={() => {
                //   dispatch({
                //     type: PRODUCT_WISHLIST_REMOVE,
                //     payload: {
                //       catalogId: data?.id || data?.catalogId,
                //       variantId: data?.addVariant?.[0]?._id || data?.variantId,
                //       sizeId: data?.sizeId,
                //     },
                //     callback: () => {
                //       dispatch({ type: GET_WISHLIST_DATA });
                //     },
                //   });
                // }}
              /> */}
            </div>
          </div>
        )}
        {myWishList && data?.catalogStatus === 1 && data?.availableQty > 0 && (
          <div className="hover-icon add-to-cart">
            <div className="gradiant-bg">
              {data?.isCart ? (
            <Image src={StoreFillIcon} alt="StoreFillIcon" />
                // <StoreFillIcon
                // //   onClick={() => {
                // //     navigate("/mycart");
                // //     // dispatch({type:PRODUCT_WISHLIST_ADD ,payload:{catalogId:data?.id}})
                // //   }}
                // />
              ) : (
            <Image src={StoreIcon} alt="StoreIcon" />
                
                // <StoreIcon
                // //   onClick={() => {
                // //     dispatch({
                // //       type: ADD_TO_CART,
                // //       payload: {
                // //         catalogId: data?.catalogId,
                // //         variantId: data?.variantId,
                // //         sizeId: data?.sizeId,
                // //       },
                // //       callback: () => {
                // //         navigate("/mycart");
                // //       },
                // //     });
                // //     // dispatch({type:PRODUCT_WISHLIST_ADD ,payload:{catalogId:data?.id}})
                // //   }}
                // />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCardCM;
