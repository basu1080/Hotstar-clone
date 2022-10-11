import React from 'react'
import './ErrorModal.css'
const ErrorModal = ({msg="sorry something went wrong"}) => {
  return (
    <div className='error-modal'>
        <h2>{msg}</h2>
    </div>
  )
}

export default ErrorModal