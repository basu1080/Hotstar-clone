import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { formToggleSliceActions } from '../store/FormToggleSlice'
const RequiredAuth = ({children}) => {

    const dispatch = useDispatch()
   
    const isLogged = useSelector((state) => state.auth.isLogged)
 
 
    if(!isLogged){
        dispatch(formToggleSliceActions.toggleLoginForm())
     
            
    }
   else{
    return children
   }
   
}

export default RequiredAuth