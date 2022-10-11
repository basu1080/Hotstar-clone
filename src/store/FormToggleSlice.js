import { createSlice } from "@reduxjs/toolkit";

const formToggleSlice = createSlice({
    name: 'toggle',
    initialState: {toggleForm: false, showLogin: false},
    reducers:{
        toggleModal(state,action) {
            state.showLogin = !state.showLogin
        },
        toggleLoginForm(state, action){
            state.toggleForm=!state.toggleForm
            console.log('exc', state.toggleForm)
        }
    }
})

export const formToggleSliceActions  = formToggleSlice.actions

export default formToggleSlice