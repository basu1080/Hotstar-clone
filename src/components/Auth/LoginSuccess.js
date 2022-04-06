import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from 'react-redux';
import './LoginSuccess.css'

const LoginSuccess = () => {
   
  const email = useSelector((state) => state.authData.authState)
  
  return (
  
       <div className='login-success'>
         <div> <CheckCircleIcon /></div>
           
            <p>Logged in with email address {email.email}</p>
       </div>

  )
}

export default LoginSuccess