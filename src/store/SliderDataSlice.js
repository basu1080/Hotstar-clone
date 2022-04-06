import { createSlice } from "@reduxjs/toolkit";

const sliderDataSlice = createSlice({
    name: 'sliderData',
    initialState: {sliderData: localStorage.getItem('sliderData') ? JSON.parse(localStorage.getItem('sliderData')) : []},
    reducers: {
        setSliderData(state,action){
            state.sliderData = action.payload
            localStorage.setItem('sliderData', JSON.stringify(state.sliderData))
        }
    }
})

export const sliderDataSliceActions = sliderDataSlice.actions

export default sliderDataSlice