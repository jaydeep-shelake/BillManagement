import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
const UserOrderCard = ({ id,billDate,paidDate,unitConsumed,totalAmount}) => {
  const [status,setStatus]=useState('')
  // const userName = useSelector(state=>state.userInfo.userName)
  

const showAddModal=()=>{
  console.log('clcked')
}

const handleOnClick=()=>{
  
}
  return (
    <Link to={`/${id}`}><div onClick={handleOnClick} className={`user-order-card `}>
      <p>Jaydeep</p>
      <p>{billDate}</p>
      <p>{paidDate}</p>
      <p>{unitConsumed} watts</p>
       <p>{totalAmount}Rs</p>
      
    </div></Link>
  )
}

export default UserOrderCard