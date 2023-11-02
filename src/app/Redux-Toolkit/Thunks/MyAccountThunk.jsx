import requestApi from "@/app/utils/request";
import {
  addEditAddressListFailure,
  addEditAddressListRequest,
  addEditAddressListSuccess,
  addressListFailure,
  addressListRequest,
  addressListSuccess,
  deleteAddressFailure,
  deleteAddressRequest,
  deleteAddressSuccess,
  profileDetailsFailure,
  profileDetailsRequest,
  profileDetailsSuccess,
  updateProfileDetailsFailure,
  updateProfileDetailsRequest,
  updateProfileDetailsSuccess,
} from "../Slices/MyAccountSlice";

export const PersonalDetailThunk = (params) => async (dispatch) => {
  try {
    dispatch(profileDetailsRequest());
    const { data } = await requestApi.post("view-profile");
    await dispatch(profileDetailsSuccess(data));
  } catch (error) {
    dispatch(profileDetailsFailure(error));
  }
};

export const UpdatePersonalDetailThunk = (params) => async (dispatch) => {
  try {
    dispatch(updateProfileDetailsRequest());
    const { data } = await requestApi.post("edit-profile", params.payload);
    await dispatch(updateProfileDetailsSuccess(data));
  } catch (error) {
    dispatch(updateProfileDetailsFailure(error));
  }
};

export const AddressListThunk = () => async (dispatch) => {
  try {
    dispatch(addressListRequest());
    const { data } = await requestApi.post("/list-address");
    await dispatch(addressListSuccess(data));
  } catch (error) {
    dispatch(addressListFailure(error));
  }
};

export const AddEditAddressThunk = (params) => async (dispatch) => {
  try {
    dispatch(addEditAddressListRequest());
    const { data } = await requestApi.post("/add-edit-address", params.payload);
    await dispatch(addEditAddressListSuccess(data));
    if (typeof params.callback === "function") {
      params.callback();
    }
  } catch (error) {
    dispatch(addEditAddressListFailure(error));
  }
};

export const DeleteAddressThunk = (params) => async (dispatch) => {
  try {
    dispatch(deleteAddressRequest());
    const { data } = await requestApi.post("/delete-address", params.payload);
    await dispatch(deleteAddressSuccess(data));
    if (typeof params.callback === "function") {
      params.callback();
    }
  } catch (error) {
    dispatch(deleteAddressFailure(error));
  }
};

