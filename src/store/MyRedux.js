import { configureStore } from "@reduxjs/toolkit";
import formToggleSlice from "./FormToggleSlice";
import detailsSlice from "./DetailsSlice";
import sliderDataSlice from "./SliderDataSlice";
import searchSlice from "./SearchSlice";
import authSlice from "./AuthSlice";
const store = configureStore({
    reducer:{
        toggleForm: formToggleSlice.reducer,
        detailsID: detailsSlice.reducer,
        sliderData: sliderDataSlice.reducer,
        searchData: searchSlice.reducer,
        authData: authSlice.reducer
    }
})

export default store;