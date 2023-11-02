import requestApi from "@/app/utils/request";
import {
  wishListDataFailure,
  wishListDataRequest,
  wishListDataSuccess,
} from "../Slices/WishListSlice";

export const WishListDataThunk = () => async (dispatch) => {
  try {
    dispatch(wishListDataRequest());
    const { data } = await requestApi.post("/product/wishlist");
    await dispatch(wishListDataSuccess(data));
  } catch (error) {
    dispatch(wishListDataFailure(error));
  }
};
