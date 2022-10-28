import React ,{ useState}from 'react'
import addbillimage from '../assets/images/Add files-rafiki.png'
import viewbillimage from '../assets/images/Add tasks-pana.png'
import PlateCard from './PlateCard'
import {GrAddCircle} from 'react-icons/gr'
import UserOrderCard from './UserOrderCard'
import { useEffect,useMemo } from 'react'
import { useSelector } from 'react-redux'
import UserModal from './UserModal'
const Main = () => {
  
  const [category,setCatogery]=useState("all")
  
  const [showModal,setShowModal]=useState(false)
  const[allBills,setBills]=useState([])

  const bills= useSelector(state=>state.bills)
  const billAmount= useMemo(()=>bills.reduce((total,item)=>total+parseInt(item.amount),0))
 

 useEffect(()=>{
setBills(bills)
 },[bills])
 
 useEffect(()=>{
 if(category==="all"){
  setBills(bills)
 }else{
   setBills(bills.filter((item)=>item.category===category))
 }
 },[category])
  

  
  return (
    <>
    <div className='main'>
      <div className="main_uppertitle">
      <h2> Dashboard</h2>
      <div className="select_container">
      <select name="category" id="category" onChange={(e)=>setCatogery(e.target.value)}>
                    <option value="all">All</option>
                    <option value="FoodNDining">FoodNDining</option>
                    <option value="utility">Utility</option>
                    <option value="shopping">Shopping</option>
                    <option value="education">Education</option>
                    <option value="travel">Travel</option>
        </select>
        </div>
      </div>
      <div className="plates">
        
            <PlateCard text="Total Bill: " bill={billAmount} img={addbillimage} />
            <PlateCard text="Budget: " bill={50000} img={viewbillimage} />
            
            <div   className={`plate-card`} >
            <div className="add-uesr">
      <h3>Add new Bill</h3>
         <div className="add-box" onClick={()=>setShowModal(true)}>
          <GrAddCircle/> Add Bill
         </div>
      </div>
            </div>
        
      </div>
      <div className="users-orders">
        <div className="status">
          <p>Description</p>
          <p>Category</p>
          <p>Amount</p>
          <p>Date</p>
          
        </div>
        {
         allBills.map((bill)=>(
           bill._id&&(<UserOrderCard 
            description={bill.description}
              category={bill.category}
              amount={bill.amount}
              date={bill.date}
              id={bill._id}
              key={bill._id}
              paid={bill.paid}
           />)
         ))
        }
          

         
      </div>
    </div>
    {showModal&&<UserModal setShowModal={setShowModal}/>}
    
    </>
  )
}

export default Main