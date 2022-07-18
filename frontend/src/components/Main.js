import React ,{ useState}from 'react'
import addbillimage from '../assets/images/Add files-rafiki.png'
import viewbillimage from '../assets/images/Add tasks-pana.png'
import managebills from '../assets/images/Credit card-cuate.png'
import PlateCard from './PlateCard'
import Modal from './Modal'
import UserOrderCard from './UserOrderCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBils } from '../actions'
const Main = () => {
  const [activeIndex,setActiveIndex]=useState(0)
  const [thaliDetails,setDetails]=useState({name:"Veg Thali", price:130})
  const [showModal,setShowModal]=useState(false)
  const [count,setCount]=useState(2)
  const dispatch =useDispatch()
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
  },[dispatch,count])
  
  const allBills = useSelector(state=>state.bills)

  const thalies =[
    {
      text:'Add Bill',
      imgUrl:addbillimage,
    },
    {
      text:'View Bills',
      imgUrl:viewbillimage,
    },
    {
      text:'Manage',
      imgUrl:managebills,
    },
  ]
 
  return (
    <>
    <div className='main'>
      <h2> Dashboard</h2>
      <div className="plates">
        {
          thalies.map((thali,i)=>(
            <PlateCard text={thali.text} img={thali.imgUrl} i={i} active={i===activeIndex?true:false} setActiveIndex={setActiveIndex} setDetails={setDetails}/>
          ))
        }
        
      </div>
      <div className="users-orders">
        <div className="status">
          <p>Name</p>
          <p>Bill Date</p>
          <p>Paid Date</p>
          <p>Unit</p>
          <p>Amount</p>
        </div>
        {
         allBills.map((bill)=>(
           <UserOrderCard 
           key={bill?._id}
           id={bill?._id}
           billDate={bill?.billDate}
           paidDate={bill?.paidDate}
           unitConsumed={bill?.unitConsumed}
           totalAmount={bill.totalAmount}
           />
         ))
        }
          

         
      </div>
      <button onClick={prev}>Prev</button>
<button onClick={next} style={{marginLeft:'10px'}}>Next</button>
    </div>
    {/* <Modal setShowModal={setShowModal}/> */}
    </>
  )
}

export default Main