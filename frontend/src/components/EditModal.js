import React,{useState}from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AddBill, editBill } from '../actions'
const UserModal = ({setShowModal}) => {
  const currentBill= useSelector(state=>state.currentBill)
  const [billDate,setBillDate]=useState(currentBill.billDate)
  const [paidDate,setPaidDate]=useState(currentBill.paidDate)
  const [unitConsumed,setUnitConsumed]=useState(currentBill.unitConsumed)
  const [totalAmount,setTotalAmount]=useState(currentBill.totalAmount)

  const dispatch =useDispatch()
  const handleOnSumbit=async(e)=>{
     e.preventDefault()
     dispatch(editBill(currentBill._id,{billDate,paidDate,unitConsumed,totalAmount}))
     setShowModal(false)
    
  }
  return (
    <div className='black-screen' onClick={()=>setShowModal(false)}>
        <div className="modal-box" onClick={(e)=>e.stopPropagation()}>
            <form onSubmit={handleOnSumbit}>
                <h3>Add Bill</h3>
                <input value={billDate} onChange={(e)=>setBillDate(e.target.value)} type="date" placeholder='Enter Bill date' />
                <input value={paidDate} onChange={(e)=>setPaidDate(e.target.value)} type="date" placeholder='Enter Paid date' />
                <input value={unitConsumed} onChange={(e)=>setUnitConsumed(e.target.value)} type="number" placeholder='Enter Unit consumed.' />
                <input value={totalAmount} onChange={(e)=>setTotalAmount(e.target.value)} type="number" placeholder='Enter Total Amount' />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UserModal