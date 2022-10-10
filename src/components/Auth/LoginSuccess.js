import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import './LoginSuccess.css'

const LoginSuccess = ({msg}) => {
   
  
  
  return (
  
       <div className='login-success'>
         <div> <CheckCircleIcon /></div>
           
            <p>{msg}</p>
       </div>

  )
}

export default LoginSuccess