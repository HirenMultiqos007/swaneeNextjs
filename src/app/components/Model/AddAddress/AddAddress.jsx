"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useEffect } from "react";
import { Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Button from "../../Button/Button";
import {
  CityThunk,
  CountryThunk,
  StateThunk,
} from "@/app/Redux-Toolkit/Thunks/GetCountryThunk";
import { useDispatch, useSelector } from "react-redux";
import { AddEditAddressThunk, AddressListThunk } from "@/app/Redux-Toolkit/Thunks/MyAccountThunk";
import { userpopupShowingCount } from "@/app/Redux-Toolkit/Slices/AuthenticationSlice";

const schema = yup.object().shape({
  firstName: yup.string().required("Please Enter First Name"),
  lastName: yup.string().required("Please Enter Last Name"),
  phoneNo: yup.string().required("Please Enter Phone Number"),
  email: yup
    .string()
    .email("Please Enter Valid Email")
    .required("Please Enter Email"),
  houseNo: yup
    .string()
    .required("Please Enter Your House Number / Street Name"),
  areaName: yup.string().required("Please Enter Landmark or Area Name"),
  cityId: yup.object().required("Please Select City"),
  stateId: yup.object().required("Please Select State"),
  zipCode: yup
    .string()
    // .matches(/^[0-9]+$/, "ZIP Code must contain only numbers")
    .required("Please Enter ZIP Code"),
  countryId: yup.object().required("Please Select Country"),
});

const AddAddress = ({ show, addressData, clear }) => {
  const dispatch = useDispatch();
  const { countryData, stateData, cityData } = useSelector((e) => e.getCountry);
  const {
    register,
    trigger,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: addressData,
    mode: "all",
  });

  useEffect(() => {
    dispatch(CountryThunk());
  }, []);

  useEffect(() => {
    if (watch("countryId")?._id) {
      dispatch(
        StateThunk({
          payload: {
            country_id: watch("countryId")?._id,
          },
        })
      );
    }
  }, [watch("countryId")?._id]);

  useEffect(() => {
    if (watch("stateId")?._id) {
      dispatch(
        CityThunk({
          payload: {
            state_id: watch("stateId")?._id,
          },
        })
      );
    }
  }, [watch("stateId")?._id]);

  const onSubmit = (data) => {
    if (data) {
      const addData = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        phoneNo: data?.phoneNo,
        email: data?.email,
        countryId: data?.countryId?._id,
        stateId: data?.stateId?._id,
        cityId: data?.cityId?._id,
        houseNo: data?.houseNo,
        areaName: data?.areaName,
        zipCode: data?.zipCode,
      };
      if (data?.addressId) {
        addData.addressId = data?.addressId;
      }
      dispatch(
        AddEditAddressThunk({
          payload: addData,
          callback: () => {
            dispatch(userpopupShowingCount(0));
            dispatch(AddressListThunk());
            clear()
          },
        })
      );
    }
  };
  return (
    <Modal
      show={show}
      onHide={() => {
        clear();
        dispatch(userpopupShowingCount(0));
      }}
      centered
      className="custom-modal add-address-modal"
      size="lg"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <div className="title">
          {" "}
          {addressData ? "Edit Address" : "Add Address"}{" "}
        </div>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <div className="personal-detail">
              <div className="address-title">Personal Details</div>
              <Row>
                <Col lg="6">
                  <div className="input-wrapper">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      {...register("firstName")}
                      className={
                        errors?.firstName?.message
                          ? "custom-input error-input"
                          : "custom-input"
                      }
                      // autoFocus
                    />
                    {errors?.firstName?.message && (
                      <span className="error">
                        {errors?.firstName?.message}
                      </span>
                    )}
                  </div>
                </Col>

                <Col lg="6">
                  <div className="input-wrapper">
                    <label> Last Name </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      name="lastName"
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
                    <label> Email Address </label>
                    <input
                      type="text"
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
                      type="text"
                      {...register("phoneNo")}
                      name="phoneNo"
                      minLength="6"
                      maxLength="10"
                      className={
                        errors?.phoneNo?.message
                          ? "custom-input error-input"
                          : "custom-input"
                      }
                      onKeyDown={(e) => {
                        if (
                          ![
                            "ArrowLeft",
                            "ArrowRight",
                            "Delete",
                            "Backspace",
                            ...Array.from({ length: 10 }, (_, i) =>
                              i.toString()
                            ),
                          ].includes(e.key)
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                    {errors?.phoneNo?.message && (
                      <span className="error">{errors?.phoneNo?.message}</span>
                    )}
                  </div>
                </Col>
              </Row>
            </div>

            <div className="address-detail">
              <div className="address-title">Address Details</div>
              <Row>
                <Col lg="6">
                  <div className="input-wrapper">
                    <label> House no/Street Name </label>
                    <textarea
                      {...register("houseNo")}
                      className={
                        errors?.houseNo?.message
                          ? "custom-input error-input"
                          : "custom-input"
                      }
                    />

                    {errors?.houseNo?.message && (
                      <span className="error">{errors?.houseNo?.message}</span>
                    )}
                  </div>
                </Col>
                <Col lg="6">
                  <div className="input-wrapper">
                    <label> Landmark/Area Name </label>
                    <textarea
                      {...register("areaName")}
                      className={
                        errors?.areaName?.message
                          ? "custom-input error-input"
                          : "custom-input"
                      }
                    />
                    {errors?.areaName?.message && (
                      <span className="error">{errors?.areaName?.message}</span>
                    )}
                  </div>
                </Col>
                <Col lg="6">
                  <div className="input-wrapper">
                    <label>Country</label>
                    <div
                      className={`customDropdown ${
                        errors?.countryId?.message ? "error" : ""
                      }`}
                    >
                      <Controller
                        control={control}
                        name="countryId"
                        render={({ field: { onChange, value } }) => (
                          <Dropdown
                            onSelect={(e) => {
                              onChange(JSON.parse(e));
                              setValue("stateId", null);
                              setValue("cityId", null);
                            }}
                          >
                            <Dropdown.Toggle
                              variant="transparent"
                              id="dropdown-basic"
                              className="icontrol"
                            >
                              {value?.name ?? "Select"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {countryData &&
                                countryData?.map((list, index) => {
                                  return (
                                    <Dropdown.Item
                                      key={index}
                                      eventKey={JSON.stringify(list)}
                                      className={
                                        list?._id === value?._id
                                          ? "actives"
                                          : ""
                                      }
                                    >
                                      {list.name}
                                    </Dropdown.Item>
                                  );
                                })}
                            </Dropdown.Menu>
                          </Dropdown>
                        )}
                      />
                    </div>
                    {errors?.countryId?.message && (
                      <span className="error">
                        {errors?.countryId?.message}
                      </span>
                    )}
                  </div>
                </Col>
                <Col lg="6">
                  <div className="input-wrapper">
                    <label> Zip Code </label>
                    <input
                      type="text"
                      {...register("zipCode")}
                      name="zipCode"
                      minlength="5"
                      maxlength="10"
                      className={
                        errors?.zipCode?.message
                          ? "custom-input error-input"
                          : "custom-input"
                      }
                      onKeyDown={(e) => {
                        if (
                          ![
                            "ArrowLeft",
                            "ArrowRight",
                            "Delete",
                            "Backspace",
                            ...Array.from({ length: 10 }, (_, i) =>
                              i.toString()
                            ),
                          ].includes(e.key)
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                    {errors?.zipCode?.message && (
                      <span className="error">{errors?.zipCode?.message}</span>
                    )}
                  </div>
                </Col>
                <Col lg="6">
                  <div
                    className={
                      errors?.stateId?.message
                        ? "input-wrapper error-wrapper"
                        : "input-wrapper"
                    }
                  >
                    <label>State</label>
                    <div
                      className={`customDropdown ${
                        errors?.stateId?.message ? "error" : ""
                      }`}
                    >
                      <Controller
                        control={control}
                        name="stateId"
                        render={({ field: { onChange, value } }) => (
                          <Dropdown
                            onSelect={(e) => {
                              onChange(JSON.parse(e));
                              setValue("cityId", null);
                            }}
                          >
                            <Dropdown.Toggle
                              disabled={!Boolean(watch("countryId")?._id)}
                              variant="transparent"
                              id="dropdown-basic"
                              className="icontrol"
                            >
                              {value?.name ?? "Select"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {stateData?.map((list, index) => {
                                return (
                                  <Dropdown.Item
                                    key={index}
                                    eventKey={JSON.stringify(list)}
                                    className={
                                      list?._id === value?._id ? "actives" : ""
                                    }
                                  >
                                    {list.name}
                                  </Dropdown.Item>
                                );
                              })}
                            </Dropdown.Menu>
                          </Dropdown>
                        )}
                      />
                    </div>
                    {errors?.stateId?.message && (
                      <span className="error">{errors?.stateId?.message}</span>
                    )}
                  </div>
                </Col>
                <Col lg="6">
                  <div
                    className={
                      errors?.countryId?.message
                        ? "input-wrapper error-wrapper"
                        : "input-wrapper"
                    }
                  >
                    <label>City</label>
                    <div
                      className={`customDropdown ${
                        errors?.cityId?.message ? "error" : ""
                      }`}
                    >
                      <Controller
                        control={control}
                        name="cityId"
                        render={({ field: { onChange, value } }) => (
                          <Dropdown
                            onSelect={(e) => {
                              onChange(JSON.parse(e));
                            }}
                          >
                            <Dropdown.Toggle
                              disabled={
                                !(
                                  Boolean(watch("countryId")?._id) &&
                                  Boolean(watch("stateId")?._id)
                                )
                              }
                              variant="transparent"
                              id="dropdown-basic"
                              className="icontrol"
                            >
                              {value?.name ?? "Select"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {cityData?.map((list, index) => {
                                return (
                                  <Dropdown.Item
                                    key={index}
                                    eventKey={JSON.stringify(list)}
                                    className={
                                      list?._id === value?._id ? "actives" : ""
                                    }
                                  >
                                    {list.name}
                                  </Dropdown.Item>
                                );
                              })}
                            </Dropdown.Menu>
                          </Dropdown>
                        )}
                      />
                    </div>
                    {errors?.cityId?.message && (
                      <span className="error">{errors?.cityId?.message}</span>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </>
          <Button commonClass="common-btn" text="Save" type="submit" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddAddress;
