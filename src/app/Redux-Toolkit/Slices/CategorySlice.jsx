import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    mainData : [],
    subData : [],
    activeCategory:null,
    selectedName:null
  },
  reducers: {
    getMainCategoryActive:(state, action)=> {
        return{
            ...state,activeCategory : action.payload
        }
    },
    mainCategoryRequest: (state, action) => {
      return {
        ...state,
      };
    },
    mainCategorySuccess: (state, action) => {
      return {
        ...state,mainData : action.payload
      };
    },
    mainCategoryFailure: (state, action) => {
      return {
        ...state,
      };
    },
    subCategoryRequest: (state, action) => {
      return {
        ...state,
      };
    },
    subCategorySuccess: (state, action) => {
      return {
        ...state,subData:action.payload
      };
    },
    subCategoryFailure: (state, action) => {
      return {
        ...state,
      };
    },
    subCategorySeletedName:(state, action)=> {
      return{
        ...state,selectedName : action.payload
      }
    }
  },
});

export const {
  mainCategoryFailure,
  mainCategoryRequest,
  mainCategorySuccess,
  subCategoryFailure,
  subCategoryRequest,
  subCategorySuccess,
  getMainCategoryActive,
  subCategorySeletedName
} = CategorySlice.actions;
export default CategorySlice.reducer;
