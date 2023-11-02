"use client"
import { WishListDataThunk } from '@/app/Redux-Toolkit/Thunks/WishListThunk';
import ProductCardCM from '@/app/components/ProductCardCM/ProductCardCM';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const MyWishList = () => {
  const dispatch = useDispatch()
  const {WishListData} = useSelector((e)=>e.WishList)
  useEffect(()=> {
    dispatch(WishListDataThunk())
  },[])
  return (
    <div className="table-content">
    <div className="title-wraper">
      <div className="table-title">My Wishlist</div>
    </div>
    <div className="content-wrapper my-wishlist-tab">
      {WishListData?.length !== 0 ? (
        WishListData?.map((data) => {
          return <ProductCardCM data={data} myWishList />;
        })
      ) : (
        <p className="no-data-found">No Data Found</p>
      )}
    </div>
  </div>
  )
}

export default MyWishList