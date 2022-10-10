import React from 'react'
import Auth from './Auth'
const Login = () => {
  return (
    <Auth isLogin={true} url='http://localhost:8000/api/auth/login/' successMsg="Login successfull"/>
  )
}

export default Login