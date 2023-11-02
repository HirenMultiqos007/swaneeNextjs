import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    productsList: [],
    filterData: [],
    checkedFilterCM: {
      category: [],
      designer: [],
      color: [],
      size: [],
      shippingTime: [],
      ProductReviewData:[]
    },
  },
  reducers: {
    ProductListRequest: (state, action) => {
      return {
        ...state,
      };
    },
    ProductListSuccess: (state, action) => {
      return {
        ...state,
        productsList: action.payload,
      };
    },
    ProductListFailure: (state, action) => {
      return {
        ...state,
      };
    },
    ProductFilterRequest: (state, action) => {
      return {
        ...state,
      };
    },
    ProductFilterSuccess: (state, action) => {
      return {
        ...state,
        filterData: action.payload,
      };
    },
    ProductFilterFailure: (state, action) => {
      return {
        ...state,
      };
    },
    checkFLMasterListing: (state, action) => {
      const FinalData = {
        ...state?.checkedFilterCM,
        [action?.payload?.name]: state?.checkedFilterCM?.[
          action?.payload?.name
        ]?.some((e) => e?.uniqId === action?.payload?.mainId?.uniqId)
          ? state?.checkedFilterCM?.[action?.payload?.name]?.filter(
              (e) => e?.uniqId !== action?.payload?.mainId?.uniqId
            )
          : [
              ...state?.checkedFilterCM?.[action?.payload?.name],
              action?.payload?.mainId,
            ],
      };
      return {
        ...state,
        checkedFilterCM: FinalData,
      };
    },
    deleteCheckFLMasterListing: (state, action) => {
      const FinalData = {
        ...state.checkedFilterCM,
        [action.payload.name]: state.checkedFilterCM?.[
          action.payload.name
        ]?.some((e) => e.uniqId === action?.payload?.uniqId)
          ? state.checkedFilterCM?.[action.payload.name]?.filter(
              (e) => e.uniqId !== action?.payload?.uniqId
            )
          : [
              ...state.checkedFilterCM?.[action.payload.name],
              action?.payload?.uniqId,
            ],
      };
      return {
        ...state,
        checkedFilterCM: FinalData,
      };
    },
    ProductReviewRequest:(state,action)=> {
      return{
        ...state
      }
    },
    ProductReviewSuccess:(state,action)=> {
      return{
        ...state,ProductReviewData: action.payload
      }
    },
    ProductReviewFailure:(state,action)=> {
      return{
        ...state
      }
    }
  },
});

export const {
  ProductListFailure,
  ProductListRequest,
  ProductListSuccess,
  ProductFilterFailure,
  ProductFilterRequest,
  ProductFilterSuccess,
  checkFLMasterListing,
  deleteCheckFLMasterListing,
  ProductReviewRequest,
  ProductReviewSuccess,
  ProductReviewFailure
} = ProductSlice.actions;
export default ProductSlice.reducer;
