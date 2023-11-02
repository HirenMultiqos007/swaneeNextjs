import React from "react";
import { Modal } from "react-bootstrap";
import  DeleteRedIcon  from "public/assets/icons/delete-red-icon.svg";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { AddressListThunk, DeleteAddressThunk } from "@/app/Redux-Toolkit/Thunks/MyAccountThunk";

const DeleteModal = ({
  showDeleteModal,
  myAddress,
  logout,
  setshowDeleteModal,
  deleteId,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (logout) {
      dispatch({ type: USER_LOGOUT});
      setshowDeleteModal(false)
      navigate("/");
    }
    if(myAddress){
      dispatch(DeleteAddressThunk({
        payload:{
          addressId: deleteId
        },
        callback : () => {
          dispatch (AddressListThunk())
          setshowDeleteModal(false)
        }
      }))
    }
  };
  return (
    <>
      <Modal
        show={showDeleteModal}
        onHide={()=> setshowDeleteModal(false)}
        centered
        className="custom-modal"
        data-dismiss="modal"
        data-toggle="modal"
        id="Delete"
        autoFocus
        backdrop="static"
        // keyboard={false}
      >
        <Modal.Body>
          <div className="delete-content">
            <div className="icon-wrapper">
              <Image src={DeleteRedIcon} alt="DeleteRedIcon" />
            </div>
            <div className="title">
              {logout
                ? "Are you sure? Do you want to logout?"
                : myAddress ? "Are you sure? Do you want to Remove Delivery Address" : "Do you want to delete your address?"}
            </div>
            <div className="button-wrapper">
              <button
                type="submit"
                className="common-btn border-btn"
                onClick={()=> setshowDeleteModal(false)}
              >
                No
              </button>
              <button
                type="submit"
                className="common-btn"
                onClick={handleSubmit}
              >
                Yes
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteModal;
