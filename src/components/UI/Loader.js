import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import Modal from './Modal'
const Loader = () => {
  return (
     
    <TailSpin
    height="50"
    width="50"
    color='rgb(19, 143, 214)'
    ariaLabel='loading'
    
  />

  )
}

export default Loader