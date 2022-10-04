import { configureStore } from "@reduxjs/toolkit";
import formToggleSlice from "./FormToggleSlice";
import detailsSlice from "./DetailsSlice";
import sliderDataSlice from "./SliderDataSlice";
import searchSlice from "./SearchSlice";
import authSlice from "./AuthSlice";
import createSagaMiddleware from 'redux-saga';
import moviesSlice from "./Slices/MoviesSlice";
import moviesSaga from "./sagas/MoviesSaga";

const saga = createSagaMiddleware()
const store = configureStore({
    reducer:{
        toggleForm: formToggleSlice.reducer,
        detailsID: detailsSlice.reducer,
        sliderData: sliderDataSlice.reducer,
        searchData: searchSlice.reducer,
        authData: authSlice.reducer,
        movies: moviesSlice.reducer
    },
    middleware: [saga]
})

saga.run(moviesSaga)
export default store;
// cathypacific