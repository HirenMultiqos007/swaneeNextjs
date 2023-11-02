const { createSlice } = require("@reduxjs/toolkit");

const GetCountrySlice = createSlice({
  name: "getCountry",
  initialState: {
    countryData: [],
    stateData: [],
    isLoading: false,
  },
  reducers: {
    getCountryRequest: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    getCountrySuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        countryData: action.payload,
      };
    },
    getCountryFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    getStateRequest: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    getStateSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        stateData: action.payload,
      };
    },
    getStateFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    getCityRequest: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    getCitySuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        cityData: action.payload,
      };
    },
    getCityFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

export const {
  getCountryFailure,
  getCountryRequest,
  getCountrySuccess,
  getStateFailure,
  getStateRequest,
  getStateSuccess,
  getCityFailure,
  getCityRequest,
  getCitySuccess
} = GetCountrySlice.actions;
export default GetCountrySlice.reducer;
