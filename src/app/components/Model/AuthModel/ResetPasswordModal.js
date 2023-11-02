"use client"
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import  BackArrowIcon  from "public/assets/icons/backarrow-icon.svg";
import  EyeIcon  from "public/assets/icons/eye-icon.svg";
import  CloseEyeIcon  from "public/assets/icons/close-eye-icon.svg";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { userpopupShowingCount } from "@/app/Redux-Toolkit/Slices/AuthenticationSlice";
import { ResetPasswordThunk } from "@/app/Redux-Toolkit/Thunks/AuthenticationThunk";

const schema = yup.object().shape({
  password: yup.string().required("Please Enter Password.").min(8,"Minimum 8 Characters Required.").max(16,"Maximum 16 Characters Required."),
  confirmpassword: yup
    .string()
    .required("Please Enter ConfirmPassword.")
    .oneOf([yup.ref("password"), null], "Password Doesn't Match."),
});

const ResetPasswordModal = ({ showModel ,search}) => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode:"onChange"
  });

  const onSubmit = (data) => {
    console.log()
    if (data) {
      dispatch(ResetPasswordThunk({
        payload: {
          password: data?.password,
          search
        },
        callback : ()=> {
          dispatch(userpopupShowingCount(0))
          router.push("/")
          reset()
        }
      }))
    }
  };
  return (
    <>
      <Modal
        show={showModel}
        // onHide={handleClose}
        centered
        className="custom-modal"
        autoFocus
        backdrop="static"
        // keyboard={false}
      >
        {/* <div className="back-btn">
          <BackArrowIcon onClick={()=> dispatch(userpopupShowingCount(4))} className="cursor-pointer" />
        </div> */}
        <Modal.Header >
          <div className="title">Reset Password</div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label> New Password</label>
              <div className="password-wrapper">
                <input
                  type={toggle1 ? "text" : "password"}
                  name="password"
                  {...register('password')}
                  // {...register("password", {
                  //   required: true,
                  // })}
                  className={
                    errors?.password
                      ? "custom-input password-field error-input"
                      : "custom-input password-field"
                  }
                  autoFocus
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

              {/* {errors?.password && (
                <span className="error">{t(`signupValidation.password`)}</span>
              )} */}
              {errors?.password?.message && <span style={{color:"red"}}>{errors?.password?.message}</span>}
            </div>

            <div className="input-wrapper">
              <label> Confirm Password </label>
              <div className="password-wrapper">
                <input
                  type={toggle2 ? "text" : "password"}
                  name = "confirmpassword"
                  {...register('confirmpassword')}
                  // {...register("confirmpassword", {
                  //   required: true,
                  // })}
                  className={
                    errors?.confirmpassword
                      ? "custom-input password-field error-input"
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
                    <CloseEyeIcon alt="eye" />
                  ) : (
                    <EyeIcon alt="eye" />
                  )}
                </div>
              </div>
              {/* {errors?.confirmpassword && (
                <span className="error">
                  {t(`signupValidation.confirmpassword`)}
                </span>
              )} */}
              {errors?.confirmpassword?.message && <span style={{color:'red'}}>{errors?.confirmpassword?.message}</span>}
            </div>
            <button className="common-btn w-100">
            Reset Password
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResetPasswordModal;
