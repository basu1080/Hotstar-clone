import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogged: false, token: "" };
const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
   
    getFetchAuthSuccess(state,action){
  
        state.isLogged = true 
        state.token = action.payload.token
    },
    logout(state){
      state.isLogged = false 
      state.token = ''
    }
   
  },
});

export const { getFetchAuthSuccess, logout} = authSlice.actions;

export default authSlice;
