const { createSlice } = require("@reduxjs/toolkit");

const WishListSlice = createSlice({
    name:"wishlist",
    initialState:{
        isLoading : false,
        WishListData : []
    },
    reducers:{
        wishListDataRequest:(state,action)=> {
            return{
                ...state,isLoading : true
            }
        },
        wishListDataSuccess:(state,action)=> {
            return{
                ...state,WishListData : action.payload, isLoading : false
            }
        },
        wishListDataFailure:(state,action)=> {
            return{
                ...state,isLoading : false
            }
        }
    }
})

export const {wishListDataFailure,wishListDataRequest,wishListDataSuccess} = WishListSlice.actions
export default WishListSlice.reducer