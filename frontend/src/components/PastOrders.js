import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBils } from '../actions'

const PastOrders = () => {
  const bills = useSelector(state=>state.bills)
  const total = bills?.reduce((a,b)=>a+b.totalAmount,0)
  const [count,setCount]=useState(2)
  const dispatch= useDispatch()
  const next=()=>{
   setCount(count+2)

    
  }
  

const prev=()=>{
  if(count>2){
    setCount(count-2)

  }
}

useEffect(()=>{
  dispatch(getAllBils(count))
},[count])
  return (
    <div className='main'>
      <h2>Bill history</h2>
      <div className="all-orders">
      <table>
  <tr>
    <th>Name</th>
    <th>Bill Date</th>
    <th>Paid Date</th>
    <th>TUnit</th>
    <th>Amount</th>
  </tr>
  {
  bills.map((order)=>(
<tr key={order?._id}>
    <td>{order?._id}</td>
    <td>{order?.billDate}</td>
    <td>{order?.paidDate}</td>
      <td>{order?.unitConsumed}</td>

    <td>{order?.totalAmount}</td>
  </tr>
  ))
  }
  
</table>
<div className="total-area">
  <p>Total:{total} <span>Rs. </span></p>
</div>
<button onClick={prev}>Prev</button>
<button onClick={next} style={{marginLeft:'10px'}}>Next</button>
      </div>
    </div>
  )
}

export default PastOrders