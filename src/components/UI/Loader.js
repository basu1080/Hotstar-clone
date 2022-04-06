import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import Modal from './Modal'
const Loader = () => {
  return (
      <Modal>
    <TailSpin
    height="100"
    width="100"
    color='rgb(19, 143, 214)'
    ariaLabel='loading'
  />
  </Modal>  
  )
}

export default Loader