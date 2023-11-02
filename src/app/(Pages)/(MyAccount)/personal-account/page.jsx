"use client";
import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import Image from "next/image";
import CameraImage from "public/assets/icons/cameraimage.svg";
import Button from "@/app/components/Button/Button";
import { UpdatePersonalDetailThunk } from "@/app/Redux-Toolkit/Thunks/MyAccountThunk";

const schema = yup.object().shape({
  firstName: yup.string().required("Please Enter First Name"),
  lastName: yup.string().required("Please Enter Last Name"),
  phoneNo: yup
    .string()
    // .matches(/^[6-9]\d{9}$/, {
    //   message: "Please enter valid number",
    //   excludeEmptyString: false,
    // })
    .required("Please Enter Phone Name")
    .min(6, "Minimum 6 Number")
    .max(16, "Maximum 16 Number"),
  email: yup
    .string()
    .email("Please enter Valid Email Address")
    .required("Please enter Email Address"),
});

const PersonalDetails = () => {
  const { ProfileData } = useSelector((e) => e.MyAccount);
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState("");
  const [selectImage, setSelectImage] = useState(null);
  const [userData, setuserData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const first = useRef(null);

  useEffect(() => {
    if (ProfileData) {
      setValue("firstName", ProfileData?.firstName);
      setValue("lastName", ProfileData?.lastName);
      setValue("email", ProfileData?.email);
      setValue("phoneNo", ProfileData?.phoneNo);
      // setValue("image",viewProfileData?.profilePic)
    }
  }, [ProfileData]);

  // const ImageUploadedToast = () => {
  //   toast.warning("*Image must be in .png, .jpeg, .jpg, .svg format", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

  const uploadImageHanlder = (e) => {
    if (e.target.files[0] === undefined) {
      // setErrorPreview(null);
    } else if (!/\.(jpe?g|png|svg)$/i.test(e.target.files[0]?.name)) {
      // setErrorPreview("*Image must be in .png, .jpeg, .jpg format");
      ImageUploadedToast();
    } else if (parseFloat(e?.target?.files[0]?.size) > 5242880) {
      // setErrorPreview("Image size should be less than 5MB.");
    } else {
      // setErrorPreview(null);
      setSelectImage(e?.target?.files[0]);
      const reader = new FileReader();
      reader.onload = function (e) {
        setPreviewImage(e?.target?.result);
      };
      reader.readAsDataURL(e?.target?.files[0]);
    }
  };

  const onSubmit = (data) => {
    const rawFormData = new FormData();
    rawFormData.append("firstName", data?.firstName);
    rawFormData.append("lastName", data?.lastName);
    rawFormData.append("email", data?.email);
    rawFormData.append("profilePic", selectImage);
    rawFormData.append("phoneNo", data?.phoneNo);
    dispatch(
      UpdatePersonalDetailThunk({
        payload: rawFormData,
      })
    );
  };
  return (
    <div className="table-content">
      <div className="title-wraper">
        <div className="table-title"> Personal Details </div>
      </div>
      <div className="content-wrapper">
        <Form
          className="profileform"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <Row>
            <Col lg="12">
              <div className="editprofile-box">
                <div className="profile-image">
                  <img
                    src={selectImage ? userData : ProfileData?.profilePic}
                    // {
                    // verifyuser?.data?.profilePic)
                    //   userData?.profileImage
                    //     ? userData?.profileImage
                    //     : dummyUserImage
                    // }
                    // {...register("image")}
                    alt=""
                    onClick={() => {
                      first.current.click();
                    }}
                    className={
                      errors?.selectImage
                        ? "custom-input error-input"
                        : "custom-input"
                    }
                  />

                  <input
                    type="file"
                    ref={first}
                    // name="file"
                    name="UpdateProfilePic"
                    className={
                      errors?.selectImage
                        ? "custom-input error-input"
                        : "custom-input"
                    }
                    onChange={(e) => {
                      uploadImageHanlder(e);
                      setuserData(URL?.createObjectURL(e?.target?.files[0]));
                    }}
                  />
                  <div
                    className="edit-icon"
                    onClick={() => {
                      first?.current?.click();
                    }}
                  >
                    <Image src={CameraImage} alt="CameraImage" />
                  </div>
                </div>
                {/* {selectImage && (
              <span className="error">{rrors?.selectImage?.message}</span>
            )} */}
              </div>
            </Col>

            <Col lg="6">
              <div className="input-wrapper">
                <label> First Name </label>
                <input
                  type="text"
                  name="fname"
                  {...register("firstName")}
                  className={
                    errors?.firstName?.message
                      ? "custom-input error-input"
                      : "custom-input"
                  }
                />
                {errors?.firstName?.message && (
                  <span className="error">{errors?.firstName?.message}</span>
                )}
              </div>
            </Col>

            <Col lg="6">
              <div className="input-wrapper">
                <label> Last Name </label>
                <input
                  type="text"
                  name="lastName"
                  {...register("lastName")}
                  className={
                    errors?.lastName?.message
                      ? "custom-input error-input"
                      : "custom-input"
                  }
                />
                {errors?.lastName?.message && (
                  <span className="error">{errors?.lastName?.message}</span>
                )}
              </div>
            </Col>

            <Col lg="6">
              <div className="input-wrapper">
                <label>Email Address </label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  className={
                    errors?.email?.message
                      ? "custom-input error-input"
                      : "custom-input"
                  }
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
                  {...register("phoneNo")}
                  className={
                    errors?.phoneNo?.message
                      ? "custom-input error-input"
                      : "custom-input"
                  }
                  name="phoneNo"
                />
                {errors?.phoneNo?.message && (
                  <span className="error">{errors?.phoneNo?.message}</span>
                )}
              </div>
            </Col>
          </Row>
          <Button commonClass="common-btn" text="Save" type="submit" />
        </Form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default PersonalDetails;
