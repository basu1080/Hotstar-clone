import { createSlice } from "@reduxjs/toolkit";

const initialState = {loading: false, movies: [], error: ''}
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        getFetchMovies(state){
            state.loading = true
        },
        getFetchMoviesSuccess(state, action){
            state.loading = false 
            state.movies = action.payload
        },
        getFetchMoviesFailure(state, action){
            state.loading = false 
            state.error = action.payload
        }
    }
})

export const {getFetchMovies, getFetchMoviesSuccess, getFetchMoviesFailure} = moviesSlice.actions;

export default moviesSlice;