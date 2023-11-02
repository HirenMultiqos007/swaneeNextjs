import requestApi from "@/app/utils/request";
import {
  ProductFilterFailure,
  ProductFilterRequest,
  ProductFilterSuccess,
  ProductListFailure,
  ProductListRequest,
  ProductListSuccess,
  ProductReviewFailure,
  ProductReviewRequest,
  ProductReviewSuccess,
} from "../Slices/ProductSlice";

export const ProductListThunk = (params) => async (dispatch) => {
  try {
    dispatch(ProductListRequest());
    const { data } = await requestApi.post("product/list", params.payload);
    await dispatch(ProductListSuccess(data));
  } catch (error) {
    dispatch(ProductListFailure(error));
  }
};

export const ProductFilterThunk = (params) => async (dispatch) => {
  try {
    dispatch(ProductFilterRequest());
    const { data } = await requestApi.post("master-list", params);
    await dispatch(ProductFilterSuccess(data));
  } catch (error) {
    dispatch(ProductFilterFailure(error));
  }
};

export const ProductReviewThunk = (params) => async (dispatch) => {
  try {
    dispatch(ProductReviewRequest());
    const { data } = await requestApi.post("list-review", params);
    await dispatch(ProductReviewSuccess(data));
  } catch (error) {
    dispatch(ProductReviewFailure(error));
  }
};
