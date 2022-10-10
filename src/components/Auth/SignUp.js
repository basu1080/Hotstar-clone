import React from 'react'
import Auth from './Auth'
const SignUp = () => {
  return (
    <Auth isLogin={false} url='http://localhost:8000/api/auth/register/' successMsg="Account created successfully"/>
  )
}

export default SignUp