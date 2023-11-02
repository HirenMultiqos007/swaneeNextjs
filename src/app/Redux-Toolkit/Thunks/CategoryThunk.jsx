import { mainCategoryFailure, mainCategoryRequest, mainCategorySuccess, subCategoryFailure, subCategoryRequest, subCategorySuccess } from "../Slices/CategorySlice"
import requestApi from '@/app/utils/request'

export const MainCategoryThunk = (params) => async(dispatch) => {
    try {
        dispatch(mainCategoryRequest())
        const {data} = await requestApi.post("main-category")
         dispatch(mainCategorySuccess(data))
        if(typeof params.callback === "function"){
             params.callback(data?.[0]?._id)
        }
    } catch (error) {
        dispatch(mainCategoryFailure(error))
    }
}

export const SubCategoryThunk = (params) => async(dispatch) => {
    try {
        dispatch(subCategoryRequest())
        const {data} = await requestApi.post("category",params.payload)
         dispatch(subCategorySuccess(data))
        if(typeof params.callback === "function"){
             params.callback(data?.[0]?._id)
        }
    } catch (error) {
        dispatch(subCategoryFailure(error))
    }
}