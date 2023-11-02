import requestApi from "@/app/utils/request";
import {
    userLoginFailure,
  userLoginRequest,
  userLoginSuccess,
  userReVerifywithOTPFailure,
  userReVerifywithOTPRequest,
  userReVerifywithOTPSuccess,
  userRegisterFailure,
  userRegisterRequest,
  userRegisterSuccess,
  userResetPasswordFailure,
  userResetPasswordRequest,
  userResetPasswordSuccess,
  userVerifywithOTPFailure,
  userVerifywithOTPRequest,
  userVerifywithOTPSuccess,
  userpopupShowingCount,
} from "../Slices/AuthenticationSlice";

export const SignUpThunk = (params) => async (dispatch) => {
  try {
    dispatch(userRegisterRequest());
    const { data } = await requestApi.post("signup", params.payload);
    dispatch(userRegisterSuccess(data));
    if (typeof params.callback === "function") {
      params.callback();
    }
  } catch (error) {
    dispatch(userRegisterFailure(error));
  }
};

export const LoginUserThunk = (params) => async (dispatch) => {
    try {
        dispatch(userLoginRequest())
        const data = await requestApi.post("login", params.payload);
        dispatch(userLoginSuccess(data))
        if(data?.data?.isEmailVerified){
          dispatch(userpopupShowingCount(0))
        }
        if(data?.data?.isEmailVerified === 0) {
          dispatch(userpopupShowingCount(3))
        } 
        if(typeof params.callback === "function"){
           params.callback()
        }
      } catch (e) {
        dispatch(userLoginFailure(e))
      }
  };

export const userVerificationThunk = (params) => async (dispatch) => {
  try {
    dispatch(userVerifywithOTPRequest());
    const { data } = await requestApi.post("verify-user", params.payload);
    dispatch(userVerifywithOTPSuccess(data));
    if (typeof params.callback === "function") {
      params.callback();
    }
  } catch (error) {
    dispatch(userVerifywithOTPFailure(error));
  }
};

export const userReVerificationThunk = (params) => async (dispatch) => {
  try {
    dispatch(userReVerifywithOTPRequest());
    const { data } = await requestApi.post("resend-otp", params.payload);
    dispatch(userReVerifywithOTPSuccess(data));
    if (typeof params.callback === "function") {
      params.callback();
    }
  } catch (error) {
    dispatch(userReVerifywithOTPFailure(error));
  }
};

export const ForgotPasswordThunk = (params) => async (dispatch) => {
  try {
    dispatch(userForgotPasswordRequest());
    const { data } = await requestApi.post("forgot-password", params.payload);
    dispatch(userForgotPasswordSuccess(data));
    if (typeof params.callback === "function") {
      params.callback();
    }
  } catch (error) {
    dispatch(userForgotPasswordFailure(error));
  }
};

export const ResetPasswordThunk = (params) => async (dispatch) => {
  try {
    dispatch(userResetPasswordRequest())
    const data = await requestApi.post(
      `reset-password/${params?.payload?.search}`,
      {
        confirmPassword: params.payload?.password,
        newPassword: params.payload?.password,
      }
    );
    dispatch(userResetPasswordSuccess(data))
    if (typeof params.callback === "function") {
      params.callback();
    }
  } catch (e) {
    dispatch(userResetPasswordFailure(e))
  }
};
