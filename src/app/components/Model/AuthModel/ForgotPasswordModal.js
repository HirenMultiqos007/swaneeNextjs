"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import BackArrowIcon from "public/assets/icons/backarrow-icon.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { userpopupShowingCount } from "@/app/Redux-Toolkit/Slices/AuthenticationSlice.jsx";
import { ForgotPasswordThunk } from "@/app/Redux-Toolkit/Thunks/AuthenticationThunk";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please Enter Email Address")
    .email("Enter Valid Email Address"),
});

const ForgotPasswordModal = ({
  showForgotModal,
  showModel,
  setShowForgotModal,
  onback,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data) {
      dispatch(
        ForgotPasswordThunk({
          payload: {
            email: data.email,
          },
          callback: () => dispatch(userpopupShowingCount(0)),
        })
      );
    }
  };

  return (
    <>
      <Modal
        show={showModel}
        centered
        className="custom-modal"
        data-dismiss="modal"
        data-toggle="modal"
        id="forgotPassword"
        autoFocus
        backdrop="static"
        data-target="#ModalForgotPassword"
      >
        <div className="back-btn">
          <Image
            src={BackArrowIcon}
            alt="BackArrowIcon"
            onClick={() => dispatch(userpopupShowingCount(1))}
            className="cursor-pointer"
          />
        </div>
        <Modal.Header>
          <div className="title">Forgot Password</div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label> Email</label>
              <input
                type="text"
                {...register("email")}
                className={
                  errors.email
                    ? "custom-input password-field error-input"
                    : "custom-input password-field"
                }
                name="email"
                autoFocus
              />

              {errors?.email?.message && (
                <span className="error">{errors?.email?.message}</span>
              )}
            </div>
            <button className="common-btn w-100">Reset Password</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ForgotPasswordModal;
