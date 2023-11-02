"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { userpopupShowingCount } from "@/app/Redux-Toolkit/Slices/AuthenticationSlice";
import Image from "next/image";
import EyeIcon from "public/assets/icons/eye-icon.svg";
import CloseEyeIcon from "public/assets/icons/close-eye-icon.svg";
import { LoginUserThunk } from "@/app/Redux-Toolkit/Thunks/AuthenticationThunk";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please Enter Email Address")
    .email("Enter Valid Email Address"),
  password: yup
    .string()
    .required("Kindly Enter a Password")
    .min(8, "Password Must Have Minimum 8 Characters")
    .max(16, "Password Must have Maximum 16 Characters"),
});

const SignInModal = ({ showModel }) => {
  const [toggle1, setToggle1] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(
      LoginUserThunk({
        payload: {
          email: data?.email,
          password: data?.password,
        },
        callback: () => {
          reset();
        },
      })
    );
  };
  return (
    <Modal
      show={showModel}
      onHide={() => dispatch(userpopupShowingCount(0))}
      centered
      className="custom-modal"
      autoFocus
      backdrop="static"
      // keyboard={false}
    >
      <Modal.Header closeButton>
        <div className="title">Sign in</div>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label> Email</label>
            <input
              type="text"
              {...register("email")}
              className={
                errors?.email?.message
                  ? "custom-input error-input"
                  : "custom-input"
              }
              name="email"
              autoFocus
            />
            {errors?.email?.message && (
              <span className="error">{errors?.email?.message}</span>
            )}
          </div>

          <div className="input-wrapper">
            <label> Password</label>
            <div className="password-wrapper">
              <input
                type={toggle1 ? "text" : "password"}
                {...register("password", {
                  required: true,
                })}
                className={
                  errors?.password?.message
                    ? "custom-input password-field error-input"
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
            {errors?.password?.message && (
              <span className="error">{errors?.password?.message}</span>
            )}
            <div
              className="forgot-link"
              onClick={() => dispatch(userpopupShowingCount(4))}
            >
              Forgot password?
            </div>
          </div>

          <div className="input-wrapper">
            <button className="common-btn w-100">Sign in</button>
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
          Don’t have an account?
          <div
            className="signup-link"
            onClick={() => dispatch(userpopupShowingCount(2))}
          >
            Sign up
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignInModal;
