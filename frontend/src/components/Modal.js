import React from 'react'
import '../styles/modal.css'
const Modal = ({setShowModal}) => {
  return (
    <div className='black-screen' onClick={()=>setShowModal(false)}>
      <div className="modal-box" onClick={(e)=>e.stopPropagation()}>
        
        <button >Submit</button>
      </div>
    </div>
  )
}

export default Modal