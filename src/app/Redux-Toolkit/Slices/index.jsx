import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import CategorySlice from "./CategorySlice";
import AuthenticationSlice from "./AuthenticationSlice";
import MyAccountSlice from "./MyAccountSlice";
import GetCountrySlice from "./GetCountrySlice";
import WishListSlice from "./WishListSlice";

export const rootReducer = combineReducers({
    Product : ProductSlice,
    Category : CategorySlice,
    Auth : AuthenticationSlice,
    MyAccount : MyAccountSlice,
    getCountry : GetCountrySlice,
    WishList : WishListSlice
})