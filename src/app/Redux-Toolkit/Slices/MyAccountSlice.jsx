const { createSlice } = require("@reduxjs/toolkit");

const MyAccountSlice = createSlice({
  name: "myAccount",
  initialState: {
    isLoading: false,
    ProfileData: null,
    addressListData: []
  },
  reducers: {
    profileDetailsRequest: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    profileDetailsSuccess: (state, action) => {
      return {
        ...state,
        ProfileData: action.payload,
        isLoading: false,
      };
    },
    profileDetailsFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    updateProfileDetailsRequest: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    updateProfileDetailsSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    updateProfileDetailsFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    addressListRequest : (state,action) => {
        return {
            ...state,isLoading: true
        }
    },
    addressListSuccess : (state,action) => {
        return {
            ...state,addressListData:action.payload,isLoading: false
        }
    },
    addressListFailure : (state,action) => {
        return {
            ...state,isLoading: false
        }
    },
    addEditAddressListRequest : (state,action) => {
        return {
            ...state,isLoading: true
        }
    },
    addEditAddressListSuccess : (state,action) => {
        return {
            ...state,isLoading: false
        }
    },
    addEditAddressListFailure : (state,action) => {
        return {
            ...state,isLoading: false
        }
    },
    deleteAddressRequest : (state,action) => {
      return{
        ...state,isLoading : true
      }
    },
    deleteAddressSuccess : (state,action) => {
      return{
        ...state,isLoading : false
      }
    },
    deleteAddressFailure : (state,action) => {
      return{
        ...state,isLoading : false
      }
    }
  },
});

export const {
  profileDetailsFailure,
  profileDetailsRequest,
  profileDetailsSuccess,
  updateProfileDetailsFailure,
  updateProfileDetailsRequest,
  updateProfileDetailsSuccess,
  addressListFailure,
  addressListRequest,
  addressListSuccess,
  addEditAddressListFailure,
  addEditAddressListRequest,
  addEditAddressListSuccess,
  deleteAddressFailure,
  deleteAddressRequest,
  deleteAddressSuccess
} = MyAccountSlice.actions;
export default MyAccountSlice.reducer;
