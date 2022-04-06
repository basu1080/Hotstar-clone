import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
    name: 'details',
    initialState: {movie_series_id: localStorage.getItem('movie_series_id') ? JSON.parse(localStorage.getItem('movie_series_id')) : ''},
    reducers:{
        viewDetails(state, action){
            state.movie_series_id = action.payload
            localStorage.setItem('movie_series_id', JSON.stringify(state.movie_series_id))
        }
    }
})

export const detailsSliceActions = detailsSlice.actions

export default detailsSlice;