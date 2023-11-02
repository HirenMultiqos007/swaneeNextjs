import requestApi from "@/app/utils/request"
import { getCityFailure, getCityRequest, getCitySuccess, getCountryFailure, getCountryRequest, getCountrySuccess, getStateFailure, getStateRequest, getStateSuccess } from "../Slices/GetCountrySlice"

export const CountryThunk = () => async(dispatch) => {
    try {
        dispatch(getCountryRequest())
        const {data} = await requestApi.post("/country")
         dispatch(getCountrySuccess(data))
    } catch (error) {
        dispatch(getCountryFailure(error))
    }
}

export const StateThunk = (params) => async(dispatch) => {
    try {
        dispatch(getStateRequest())
        const {data} = await requestApi.post("/state",params.payload)
         dispatch(getStateSuccess(data))
    } catch (error) {
        dispatch(getStateFailure(error))
    }
}

export const CityThunk = (params) => async(dispatch) => {
    try {
        dispatch(getCityRequest())
        const {data} = await requestApi.post("/city",params.payload)
         dispatch(getCitySuccess(data))
    } catch (error) {
        dispatch(getCityFailure(error))
    }
}