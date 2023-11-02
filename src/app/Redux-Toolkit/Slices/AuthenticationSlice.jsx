"use client"
const { createSlice } = require("@reduxjs/toolkit");

const AuthenticationSlice = createSlice({
  // 0 ---->>> signin
  // 1 ---->>> signup
  // 2 ---->>> Otp
  // 3 ---->>> Forgotpasword
  // 4 ---->>> ResetPassword
  name: "auth",
  initialState: {
    currentActiveModel: null,
    isLogin:typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("isLogin")) : null,
    authToken: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("authToken")) : null,
    isEmailVerified: null,
    email: null,
    isLoading: false,
  },
  reducers: {
    userpopupShowingCount: (state, action) => {
      return { ...state, currentActiveModel: action.payload };
    },
    userRegisterRequest: (state, action) => {
      return {
        ...state,
      };
    },
    userRegisterSuccess: (state, action) => {
      localStorage.setItem(
        "authToken",
        JSON.stringify(action?.payload?.meta?.tokenData)
      );
      localStorage.setItem("email", action?.payload?.data?.email);
      return {
        ...state,
        isLogin: false,
        isEmailVerified: action?.payload?.data?.isEmailVerified,
        authToken: action?.payload?.meta?.tokenData,
        email: action?.payload?.data?.email,
      };
    },
    userRegisterFailure: (state, action) => {
      return {
        ...state,
      };
    },
    userLoginRequest: (state, action) => {
      return { ...state, isLoading: true};
    },
    userLoginSuccess(state, action) {
      localStorage.setItem(
        "authToken",
        JSON.stringify(action?.payload?.meta?.tokenData)
      );
      localStorage.setItem("email", action?.payload?.data?.email);
      if (action?.payload?.data?.isEmailVerified === true) {
        localStorage.setItem(
          "isLogin",
          JSON.stringify(action?.payload?.data?.isEmailVerified)
        );
      }
      return {
        ...state,
        isLoading: false,
        email: action?.payload?.data?.email,
        isLogin: action?.payload?.data?.isEmailVerified === true ? true : false,
        isEmailVerified: action?.payload?.data?.isEmailVerified,
        authToken: action?.payload?.meta?.tokenData,
      };
    },
    userLoginFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action.payload.message,
      });
      return { ...state, isLoading: false};
    },
    userVerifywithOTPRequest: (state, action) => {
      return {
        ...state,
      };
    },
    userVerifywithOTPSuccess: (state, action) => {
      localStorage.setItem(
        "isLogin",
        JSON.stringify(action?.payload?.data?.isEmailVerified)
      );
      Swal.fire({
        position: "center",
        icon: "success",
        text: action?.payload?.meta?.message,
      });
      return {
        ...state,
        isLogin: true,
      };
    },
    userVerifywithOTPFailure: (state, action) => {
      return {
        ...state,
      };
    },
    userReVerifywithOTPRequest: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    userReVerifywithOTPSuccess(state, action) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: action.payload.message,
      });
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        error: null,
      };
    },
    userReVerifywithOTPFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action?.payload?.message,
      });
      return { ...state, isLoading: true };
    },
    userForgotPasswordRequest(state, action) {
      return { ...state, isLoading: true };
    },
    userForgotPasswordSuccess(state, action) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: action.payload.meta.message,
      });
      return {
        ...state,
        isLoading: false,
      };
    },
    userForgotPasswordFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action.payload.message,
      });
      return {
        ...state,
        isLoading: false,
      };
    },
    userResetPasswordRequest(state, action) {
      return { ...state, isLoading: true };
    },
    userResetPasswordSuccess(state, action) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: action.payload.meta.message,
      });
      return {
        ...state,
        isLoading: false,
      };
    },
    userResetPasswordFailure(state, action) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: action.payload.message,
      });
      return { ...state, isLoading: false };
    },
  },
});

export const {
  userpopupShowingCount,
  userRegisterFailure,
  userRegisterRequest,
  userRegisterSuccess,
  userReVerifywithOTPRequest,
  userReVerifywithOTPSuccess,
  userReVerifywithOTPFailure,
  userVerifywithOTPFailure,
  userVerifywithOTPRequest,
  userVerifywithOTPSuccess,
  userForgotPasswordFailure,
  userForgotPasswordRequest,
  userForgotPasswordSuccess,
  userResetPasswordFailure,
  userResetPasswordRequest,
  userResetPasswordSuccess,
  userLoginFailure,
  userLoginRequest,
  userLoginSuccess
} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
