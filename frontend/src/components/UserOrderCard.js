import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
const UserOrderCard = ({ id,description,category,amount,date,paid}) => {

  return (
    <Link to={`/allBills/${id}`}><div  className={`user-order-card ${!paid&&"active"} `} >
      <p>{description}</p>
      <p>{category}</p>
      <p>{amount}</p>
      <p>{date}</p>
       
      
    </div></Link>
  )
}

export default UserOrderCard