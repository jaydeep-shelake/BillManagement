import React,{useState}from 'react'
import {useDispatch} from 'react-redux'
import { AddBill } from '../actions'
import "../styles/modal.css"
const UserModal = ({setShowModal}) => {
  const [description,setDes]=useState("")
  const [amount,setAmount]=useState("")
  const [date,setDate]=useState("")
  const [category,setCatogery]=useState("FoodNDining")

  const dispatch =useDispatch()
  const handleOnSumbit=async(e)=>{
     e.preventDefault()
     dispatch(AddBill({description,amount,date,category}))
     setShowModal(false)
    
  }
  return (
    <div className='black-screen' onClick={()=>setShowModal(false)}>
        <div className="modal-box" onClick={(e)=>e.stopPropagation()}>
            <form onSubmit={handleOnSumbit}>
                <h3>Add Bill</h3>
                <input value={description} onChange={(e)=>setDes(e.target.value)} type="text" placeholder='description' />
                <select name="category" id="category" onChange={(e)=>setCatogery(e.target.value)}>
                    <option value="FoodNDining">FoodNDining</option>
                    <option value="utility">Utility</option>
                    <option value="shopping">Shopping</option>
                    <option value="education">Education</option>
                    <option value="travel">Travel</option>
                </select>
                <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="text" placeholder='Amount' />
                <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" placeholder='Date' />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UserModal