import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,useHistory } from 'react-router-dom'
import { deleteBill, getBill } from '../actions'
import EditModal from '../components/EditModal'
const Bill = () => {
  const [show,setShow]=useState(false)
    const {id}=useParams()
    const billInfo = useSelector(state=>state.currentBill)
    const dispatch =useDispatch()
    const history=useHistory()
   
    useEffect(()=>{
      dispatch(getBill(id))
    },[])
  return (
    <div className='main'>
      <h2>{id}</h2>
      <div className="billid">
        <h4>Name: {billInfo?.description}</h4>
        <h4>Amount: {billInfo?.amount}</h4>
        <h4>Category: {billInfo?.category}</h4>
        <h4>Paid Status: {billInfo?.paid?"Paid":"Not Paid"}</h4>
        <div className="billid-options">
        <button onClick={()=>{
          dispatch(deleteBill(id,history))
         
          }}>Delete</button>
        <button onClick={()=>setShow(true)}>Edit</button>
      </div>
      </div>
     {show&&<EditModal setShowModal={setShow}/>}
    </div>
  )
}

export default Bill