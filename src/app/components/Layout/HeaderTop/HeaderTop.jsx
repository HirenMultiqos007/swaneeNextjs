"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import { useNavigate, Link } from "react-router-dom";
import PerniaLogo  from "public/assets/images/pernia-logo.svg";
import  SeachIcon  from "public/assets/icons/search-icon.svg";
import  CrossIcon  from "public/assets/icons/gray-cross-icon.svg";
import  MyAccountIcon  from "public/assets/icons/myaccount-icon.svg";
import  WhishlistIcon  from "public/assets/icons/whishlist-icon.svg";
import  CartIcon  from "public/assets/icons/cart-icon.svg";
import SignInModal from '../../Model/AuthModel/SignInModal'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { userpopupShowingCount } from "@/app/Redux-Toolkit/Slices/AuthenticationSlice";
import SignUpModal from "../../Model/AuthModel/SignUpModal";
import OTPSection from "../../Model/AuthModel/OTPSection";
import ForgotPasswordModal from "../../Model/AuthModel/ForgotPasswordModal";
import ResetPasswordModal from "../../Model/AuthModel/ResetPasswordModal";
import { useSearchParams } from "next/navigation";


const HeaderTop = () => {
  const dispatch = useDispatch()
  const [activetab, setactivetab] = useState("New");
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const {currentActiveModel} = useSelector((e)=> e.Auth)
  const [active, setActive] = useState("My Wishlist");
  const params = useSearchParams()

  console.log(params.get("query"),"paramsparamsparams")


  const signInModalShow = () => {
    if ("isLogin" === true) {
      navigate(personaldetail);
    } else {
      dispatch(userpopupShowingCount(1))
    }
  };

  useEffect(()=> {
    if(params.get("query")){
      dispatch(userpopupShowingCount(5))
    }
  },[params.get("query")])

  useEffect(() => {
    if (!isOpen) {
      document.documentElement
        .querySelector("body")
        .classList.add("mobile-open");
    } else {
      document.documentElement
        .querySelector("body")
        .classList.remove("mobile-open");
    }
  }, [isOpen]);
  return (
    <>
      <div className="header-top">
        <Link
          className="header-desktop-none"
          // to={home}
          href="/"
        >
          {/* <PerniaLogo className="logo" /> */}
          <Image src={PerniaLogo}  className="logo" />

        </Link>
        <div
          className="mobile-toggle"
          // onClick={() => setIsOpen(!isOpen)}
        >
          <i></i>
        </div>
        <Container>
          <div className="header-wrapper">
            <Link
              className="hidden-sm-tablet"
              //  to={home}
              href="/"
            >
              {/* <PerniaLogo className="logo" /> */}
              <img src={PerniaLogo.src}  className="logo" />

            </Link>
            <div className="header-top-right">
              <div className="search-form">
                <div
                  className={`searchPanelMobile ${isActive ? "is-active" : ""}`}
                >
                  <div className="mobileMenuBlock">
                    <input
                      name="search-field"
                      type="text"
                      className="input"
                      placeholder="Search for products and more"
                    />
                    <button
                      type="button"
                      aria-label="Close"
                      className="btn-close"
                      onClick={() => setIsActive(!isActive)}
                    ></button>
                  </div>
                </div>
                <div className="d-block d-sm-block  d-xl-none d-xxl-none">
                  {/* <SeachIcon
                    alt="search-icon"
                    onClick={() => setIsActive(!isActive)}
                  /> */}
                <img src={SeachIcon.src} alt="search-icon"  onClick={() => setIsActive(!isActive)} />

                </div>
                <div className="hidden-sm-tablet">
                  <div className="search-box">
                    {/* <SeachIcon alt="search-icon" className="search-icon" /> */}
                <img src={SeachIcon.src} alt="search-icon" className="search-icon"/>

                    <input
                      name="search-field"
                      type="text"
                      className="search-form-input"
                      aria-invalid="false"
                      aria-required="false"
                      placeholder="Search for products and more"
                    />
                    {/* <CrossIcon
                      alt="cross-icon"
                      className="cross-icon search-icon"
                    /> */}
                    <img src={CrossIcon.src} alt="cross-icon" className="cross-icon search-icon"/>
                  </div>
                </div>
              </div>
              <div
                className="user-name hidden-sm-tablet"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("http://110.227.212.251/seller.pernia/")
                }
              >
                Become a Seller
              </div>
              {/* <MyAccountIcon
                onClick={signInModalShow}
                className="cursor-pointer"
              /> */}
                <Image src={MyAccountIcon} className="cursor-pointer" onClick={signInModalShow} />

              {/* <WhishlistIcon
                onClick={() => {
                  setActive("My Wishlist");
                  navigate(mywishlist);
                }}
                id="My Wishlist"
                className={
                  active === "My Wishlist"
                    ? "cursor-pointer active"
                    : "cursor-pointer"
                }
              /> */}
                <Image src={WhishlistIcon} className={
                  active === "My Wishlist"
                    ? "cursor-pointer active"
                    : "cursor-pointer"
                }/>

              <div className="cart cursor-pointer">
                <Image src={CartIcon} />
                {/* <CartIcon onClick={() => navigate(mycart)} /> */}
                <span className="bagde">
                  {/* {cartItems.length} */}
                   15
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div> 
      {currentActiveModel === 1 && 
      <SignInModal showModel={currentActiveModel ===1} />
      }
      {currentActiveModel === 2 && 
        <SignUpModal showModel = { currentActiveModel === 2 }/>
      }
        {currentActiveModel === 3 && 
         <OTPSection showModel = {currentActiveModel === 3}/>
      }
      {currentActiveModel === 4 && 
        <ForgotPasswordModal
        showModel = {currentActiveModel === 4}
      /> 
      } 
      {currentActiveModel === 5 && 
        <ResetPasswordModal search = {params.get("query")}
        showModel = {currentActiveModel === 5}
      /> 
      } 
    </>
  );
};

export default HeaderTop;
