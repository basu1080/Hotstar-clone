import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {type: localStorage.getItem('search-type') ? JSON.parse(localStorage.getItem('search-type')) : '',
                   keyword: localStorage.getItem('search-keyword') ? JSON.parse(localStorage.getItem('search-keyword')) : ''
},
reducers:{
    setSearchData(state,action){
        state.type= action.payload.type
        state.keyword=action.payload.keyword
        localStorage.setItem('search-type', JSON.stringify(state.type))
        localStorage.setItem('search-keyword', JSON.stringify(state.keyword))
    },
    
}
})

export const searchSliceActions = searchSlice.actions

export default searchSlice