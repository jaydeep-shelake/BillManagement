import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PastOrders = () => {
  const bills = useSelector(state=>state.bills)
  const total = bills?.reduce((a,b)=>a+parseInt(b.amount),0)
 
  
  return (
    <div className='main'>
      <h2>Bill history</h2>
      <div className="all-orders">
      <table>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Amount</th>
    <th>date</th>
    <th>Status</th>
    <th>Action</th>
    
  </tr>
  {
  bills.map((order)=>(
<tr key={order?._id} className={`row ${!order?.paid&&"active"}`}>

    <td>{order?._id}</td>
    <td>{order?.description}</td>
    <td>{order?.amount}</td>
    <td>{order?.date}</td>
      <td>{order?.paid?"Paid":"Not Paid"}</td>
       <td><Link to={`/allBills/${order._id}`}><button>View Bill</button></Link></td>
  </tr>
  ))
  }
  
</table>
<div className="total-area">
  <p>Total:{total} <span>Rs. </span></p>
</div>

      </div>
    </div>
  )
}

export default PastOrders