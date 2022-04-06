import { createSlice } from "@reduxjs/toolkit";

const formToggleSlice = createSlice({
    name: 'toggle',
    initialState: {toggleForm: false, showModal: false},
    reducers:{
        toggleModal(state,action) {
            state.showModal = !state.showModal
        },
        toggleLoginForm(state, action){
            state.toggleForm=!state.toggleForm
        }
    }
})

export const formToggleSliceActions  = formToggleSlice.actions

export default formToggleSlice