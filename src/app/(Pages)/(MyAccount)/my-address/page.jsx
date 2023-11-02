"use client"
import { userpopupShowingCount } from '@/app/Redux-Toolkit/Slices/AuthenticationSlice';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PlusIcon from "public/assets/icons/plus-icon.svg";
import LocationIcon from "public/assets/icons/location-icon.svg";
import MobileIcon from "public/assets/icons/mobile-icon.svg";
import EmailIcon from "public/assets/icons/email-icon.svg";
import EditIcon from "public/assets/icons/edit-icon.svg";
import DeleteIcon from "public/assets/icons/delete-icon.svg";
import AddAddress from '@/app/components/Model/AddAddress/AddAddress';
import { AddressListThunk } from '@/app/Redux-Toolkit/Thunks/MyAccountThunk';
import DeleteModal from '@/app/components/Model/AuthModel/DeleteModal';


const MyAddress = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const {addressListData} = useSelector((e)=>e.MyAccount)
  const { currentActiveModel } = useSelector((e) => e.Auth);

  const ref = useRef();
  const ref2 = useRef();
  useEffect(() => {
    dispatch(AddressListThunk())
  }, []);
  return (
    <>
    <div className="table-content">
    <div className="add-address">
      <div className="title-wraper">
        <div className="table-title">Delivery Address</div>
        <div
          className="icon-wrapper"
          onClick={() => {
            dispatch(userpopupShowingCount(6));
          }}
        >
          <Image src={PlusIcon} alt='PlusIcon'/>
          <span>Add Address</span>
        </div>
      </div>
      {console.log(addressListData,'addressListData')}
      <div className="content-wrapper">
        <Row className="custom-row-space">
          {addressListData && addressListData?.map((add, i) => {
            return (
              <Col xl="6" key={i}>
                <div className="graybg address-details">
                  <div className="address-inner">
                    <div className="custom-radio">
                      <input
                        type="radio"
                        id={add?.addressId}
                        name="address"
                      />
                      <label htmlFor={add?.addressId}></label>
                    </div>

                    <div className="customer-detail">
                      <div className="customer-name">
                        {add?.firstName} {add?.lastName}
                      </div>
                      <div className="personal-info">
                        <div className="address-detail">
                          <Image
                            src={LocationIcon}
                            style={{ marginTop: "3px" }}
                          />{" "}
                          <span>
                            {add?.houseNo},{add?.areaName},{add?.cityName}-
                            {add?.stateName},{add?.countryName},
                            {add?.zipCode}{" "}
                          </span>
                        </div>
                        <div className="contact-info">
                          <div className="contact">
                            <Image src={MobileIcon} />{" "}
                            <span>{add?.phoneNo}</span>
                          </div>
                          <div className="mail-detail">
                            <Image src={EmailIcon} />{" "}
                            <span>{add?.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="action">
                    <Image
                      src={EditIcon}
                      className="cursor-pointer action-icon"
                      onClick={() => {
                        dispatch(userpopupShowingCount(6));
                        const viewData = {
                          ...add,
                          cityId: { _id: add?.cityId, name: add?.cityName },
                          stateId: {
                            _id: add?.stateId,
                            name: add?.stateName,
                          },
                          countryId: {
                            _id: add?.countryId,
                            name: add?.countryName,
                          },
                        };
                        // delete viewData?.cityName
                        console.log(viewData, "viewData");
                        ref.current = viewData;
                      }}
                    />
                    <Image
                      src={DeleteIcon}
                      className="cursor-pointer action-icon"
                      onClick={() => {
                        setShow(true);
                        ref2.current = add;
                      }}
                      // onClick={() => dispatch({type:DELETE_DELIVERY_ADDRESS,payload:{addressId:add?.addressId}})}
                    />
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  </div>
    {currentActiveModel === 6 && (
      <AddAddress
        show={currentActiveModel === 6}
        addressData={ref.current}
        clear={() => {
          ref.current = null;
        }}
      />
    )}
       {show && (
        <DeleteModal
          myAddress
          showDeleteModal={show}
          setshowDeleteModal={setShow}
          deleteId={ref2.current.addressId}
        />
      )}
    </>
  )
}

export default MyAddress