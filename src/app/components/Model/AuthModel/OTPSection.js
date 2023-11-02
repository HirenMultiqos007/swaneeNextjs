"use client"
import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userpopupShowingCount } from "@/app/Redux-Toolkit/Slices/AuthenticationSlice";
import { userReVerificationThunk } from "@/app/Redux-Toolkit/Thunks/AuthenticationThunk";

// 0 ---->>> signin
// 1 ---->>> signup
// 2 ---->>> Otp
// 3 ---->>> Forgotpasword
// 4 ---->>> ResetPassword

const OTPSection = ({
  showOtpModal,
  setShowOtpModal,
  onback,
  setShowSignup,
  setClickLogin,
  showModel,
}) => {
  const schema = yup.object().shape({
    otp: yup.string(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const {email} = useSelector((e)=>e.Auth)
  const [otp, setOtp] = useState(null);
  const [remainingTime, setRemainingTime] = useState(90);
  const dispatch = useDispatch();

  function handleChange(otp) {
    setOtp(otp);
  }
  // const handleBack = () => {
  //   setShowOtpModal(false);
  //   onback();
  // };
  const onSubmit = () => {
    dispatch(userVerificationThunk({
      payload:{
        email, otp: +otp
      },
      callback:()=> {
        dispatch(userpopupShowingCount(0));
        setOtp(null);
      }
    }))
  };

  const resendOTP = () => {
    dispatch(userReVerificationThunk({
      payload:{
        email
      },
      callback: () => {
        setOtp(null)
        setRemainingTime(90)
      },
    }))
  };
  const containerStyle = {
    width: 50,
    height: 50,
    marginRight: 15,
  };

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [remainingTime]);
  return (
    <>
      <Modal
        show={showModel}
        onHide={() => dispatch(userpopupShowingCount(0))}
        centered
        className="custom-modal"
        data-dismiss="modal"
        data-toggle="modal"
        id="EmailVerification"
        autoFocus
        backdrop="static"
        // keyboard={false}
        data-target="#ModalOTPSection"
      >
        <Modal.Header closeButton>
          <div className="title">Email Verification</div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label>Enter OTP</label>
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                inputStyle={containerStyle}
                shouldAutoFocus
                isInputNum={true}
                isDisabled={remainingTime <= 0} // Disable when remainingTime is 0 or negative
                renderInput={(props) => <input {...props} />}
                inputType="number"
              />
              {/* <p className="mt-3  text-end"> */}

              <p className="mt-1">
                {Math.floor(remainingTime / 60)}:{remainingTime % 60} seconds
                left
              </p>
              {remainingTime <= 0 && <p>Time expired. Resend OTP.</p>}
              {/* {(otp?.length!==6) && <span className="error">Enter otp</span>} */}
            </div>
            <div className="input-wrapper">
              <button className="common-btn w-100" type="submit">
                Verify
              </button>
            </div>
          </form>
            {remainingTime <= 0 && 
          <div className="signup">
            Send OTP Again
              <div className="signup-link" onClick={resendOTP}>
                Resend OTP
              </div>
          </div>
            }
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default OTPSection;
