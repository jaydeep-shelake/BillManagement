import React,{useState}from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AddBill, editBill } from '../actions'
const UserModal = ({setShowModal}) => {
  const currentBill= useSelector(state=>state.currentBill)
  const [description,setDes]=useState(currentBill.description)
  const [amount,setAmount]=useState(currentBill.amount)
  const [date,setDate]=useState(currentBill.date)
  const [category,setCatogery]=useState(currentBill.category)
  const [paid,setPaid]=useState(currentBill.paid)

  const dispatch =useDispatch()
  const handleOnSumbit=async(e)=>{
     e.preventDefault()
     dispatch(editBill(currentBill._id,{description,amount,date,category,paid}))
     setShowModal(false)
    
  }
  return (
    <div className='black-screen' onClick={()=>setShowModal(false)}>
        <div className="modal-box" onClick={(e)=>e.stopPropagation()}>
            <form onSubmit={handleOnSumbit}>
                <h3>Add Bill</h3>
                <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" placeholder='Enter Bill date' />
               <select value={paid} onChange={(e)=>setPaid(e.target.value)} name="paid" id="paid">
                <option value={false}>Not Paid</option>
                <option value={true}>Paid</option>
               </select>
                <input value={description} onChange={(e)=>setDes(e.target.value)} type="text" placeholder='Description' />
                <select name="category" value={category} id="category" onChange={(e)=>setCatogery(e.target.value)}>
                    <option value="FoodNDining">FoodNDining</option>
                    <option value="utility">Utility</option>
                    <option value="shopping">Shopping</option>
                    <option value="education">Education</option>
                    <option value="travel">Travel</option>
                </select>
                <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" placeholder='Enter Total Amount' />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UserModal