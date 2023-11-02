"use client";
import React, { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import EyeIcon from "public/assets/icons/eye-icon.svg";
import CloseEyeIcon from "public/assets/icons/close-eye-icon.svg";
import googleIcon from "public/assets/images/social-google.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import OTPSection from "./OTPSection";
import Image from "next/image";
import { userpopupShowingCount } from "@/app/Redux-Toolkit/Slices/AuthenticationSlice";
import { SignUpThunk } from "@/app/Redux-Toolkit/Thunks/AuthenticationThunk";

const schema = yup.object().shape({
  fname: yup.string().required("Enter Your First Name"),
  lname: yup.string().required("Enter Your Last Name"),
  phoneno: yup
    .string()
    .required("Enter Your Phone Number")
    .min(8, "Phone Number Must be Minimum 8 Characters")
    .max(10, "Phone Number Must be Maximum 10 Characters"),
  email: yup
    .string()
    .email("Enter Valid Email Address")
    .required("Please Enter Email Address"),
  password: yup
    .string()
    .required("Please Enter Password")
    .min(8, "Password must have min 8 characters")
    .max(16, "Password must have max 16 characters"),
  confirmpassword: yup
    .string()
    .required("Please Enter Confirm Password")
    .min(8, "Confirm Password must have min 8 characters")
    // .max(15,"Password must be between 6 and 15 characters long ")
    .oneOf([yup.ref("password")], "Password does not match"),
  termsandconditions: yup.boolean().oneOf([true]),
});

const SignUpModal = ({
  showSignup,
  showModel,
  setShowSignup,
  onback,
  clickLogin,
  clearFillData,
  setClearFillData,
}) => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [backbtn, setBtnBtn] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [clickSignupOtpOpen, setClickSignupOtpOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { fname, email, password, lname, phoneno } = data;

    console.log(data, "GGGGGGGGGGGGGGGGGGGG");

    // dispatch(
    //   SignUpThunk({
    //     payload: {
    //       firstName: fname,
    //       lastName: lname,
    //       email: email,
    //       phoneNo: phoneno,
    //       password: password,
    //     },
    //     callback : ()=> {
    //       dispatch(userpopupShowingCount(3))
    //     }
    //   })
    // );
    dispatch(userpopupShowingCount(3))
  };

  useEffect(() => {
    if (clearFillData) {
      reset();
    }
  }, [clearFillData]);

  return (
    <>
      <Modal
        show={showModel}
        onHide={() => dispatch(userpopupShowingCount(0))}
        centered
        className="custom-modal"
        size="lg"
      >
        <Modal.Header closeButton>
          <div className="title">Sign up</div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col lg="6">
                <div className="input-wrapper">
                  <label> First Name"</label>
                  <input
                    type="text"
                    {...register("fname")}
                    className={
                      errors.fname?.message
                        ? "custom-input error-input"
                        : "custom-input"
                    }
                    autoFocus
                  />

                  {errors?.fname?.message && (
                    <span className="error">{errors.fname?.message}</span>
                  )}
                </div>
              </Col>
              <Col lg="6">
                <div className="input-wrapper">
                  <label>Last Name</label>
                  <input
                    type="text"
                    {...register("lname")}
                    className={
                      errors?.lname?.message
                        ? "custom-input error-input"
                        : "custom-input"
                    }
                  />
                  {errors?.lname?.message && (
                    <span className="error">{errors?.lname?.message}</span>
                  )}
                </div>
              </Col>
              <Col lg="6">
                <div className="input-wrapper">
                  <label> Email Address </label>
                  <input
                    type="text"
                    {...register("email")}
                    className={
                      errors?.email?.message
                        ? "custom-input error-input"
                        : "custom-input"
                    }
                    name="email"
                  />
                  {errors?.email?.message && (
                    <span className="error">{errors?.email?.message}</span>
                  )}
                </div>
              </Col>
              <Col lg="6">
                <div className="input-wrapper">
                  <label> Phone No </label>
                  <input
                    type="number"
                    {...register("phoneno")}
                    className={
                      errors.phoneno?.message
                        ? "custom-input error-input"
                        : "custom-input"
                    }
                    name="phoneno"
                  />
                  {errors.phoneno?.message && (
                    <span className="error">{errors.phoneno?.message}</span>
                  )}
                </div>
              </Col>
              <Col lg="6">
                <div className="input-wrapper">
                  <label> Password </label>
                  <div className="password-wrapper">
                    <input
                      type={toggle1 ? "text" : "password"}
                      {...register("password")}
                      className={
                        errors?.password
                          ? "custom-input error-input"
                          : "custom-input password-field"
                      }
                    />
                    <div
                      onClick={() => {
                        setToggle1(!toggle1);
                      }}
                      className="eye-icon"
                    >
                      {!toggle1 ? (
                        <Image src={CloseEyeIcon} alt="eye" />
                      ) : (
                        <Image src={EyeIcon} alt="eye" />
                      )}
                    </div>
                  </div>
                  {errors.password && (
                    <span className="error">{errors?.password?.message}</span>
                  )}
                </div>
              </Col>
              <Col lg="6">
                <div className="input-wrapper">
                  <label> Confirm Password </label>
                  <div className="password-wrapper">
                    <input
                      type={toggle2 ? "text" : "password"}
                      {...register("confirmpassword")}
                      className={
                        errors.confirmpassword
                          ? "custom-input error-input"
                          : "custom-input password-field"
                      }
                    />
                    <div
                      onClick={() => {
                        setToggle2(!toggle2);
                      }}
                      className="eye-icon"
                    >
                      {!toggle2 ? (
                        <Image src={CloseEyeIcon} alt="eye" />
                      ) : (
                        <Image src={EyeIcon} alt="eye" />
                      )}
                    </div>
                  </div>
                  {errors.confirmpassword && (
                    <span className="error">
                      {errors?.confirmpassword?.message}
                      {/* {t(`signupValidation.confirmpassword`)} */}
                    </span>
                  )}
                </div>
              </Col>
            </Row>

            <div className="input-wrapper">
              <div className="signup terms-link">
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="chk7421"
                    {...register("termsandconditions", {
                      required: true,
                    })}
                  />
                  <label for="chk7421"></label>
                </div>
                I accept all the
                <div className="signup-link">Terms & Condition</div>
                and
                <div className="signup-link">Privacy Policy</div>
              </div>
              {errors.termsandconditions && (
                <span className="error">
                  You need to agree with terms and conditions
                </span>
              )}
            </div>

            <div className="input-wrapper">
              <button className="common-btn w-100">Verify Email</button>
            </div>
          </form>

          {/* <div className="social-login">
            <div className="custom-border cursor-pointer">
              <LoginSocialGoogle
                client_id="707606064532-keecuokqlj16sduiu1aqsq075bprvlr2.apps.googleusercontent.com"
                onResolve={({ provider, data }) => {
                  setGoogleRef(data);
                }}
              >
                <img src={googleIcon} alt="GoogleIcon" />
       
              </LoginSocialGoogle>
            </div>
          </div> */}

          <div className="signup">
            Already have an account?
            <div
              className="signup-link"
              onClick={() => dispatch(userpopupShowingCount(1))}
            >
              Sign in
            </div>
          </div>
          <div className="signup"></div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUpModal;
