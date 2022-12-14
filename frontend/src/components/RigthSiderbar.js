import React,{useState,useMemo} from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import {GrAddCircle} from 'react-icons/gr'
import '../styles/rightsidebar.css'
import UserModal from './UserModal';
import { useSelector } from 'react-redux';
const RigthSiderbar = () => {
  const [showModal,setShowModal]=useState(false)
  const bills = useSelector(state=>state.bills)
  const totalAmont = useMemo(()=>bills.reduce((total,item)=>total+parseInt(item.amount),0))
  const billToBePaid= useMemo(()=>bills.filter(item=>item.paid===false).reduce((total,item)=>total+parseInt(item.amount),0))
   const waringAmount= 40000
  return (
    <>
    <div className='right-sidebar'>
    <div className="user-info">
        <p>Total Bill: <span>{totalAmont}</span></p>
      </div>
    <div className="user-info">
        <p>Bill to be Paid: <span>{billToBePaid}</span></p>
      </div>
         {billToBePaid>=waringAmount&&<p className="err">Budget has came to end</p>}
      <div className="chart-area">
        <h3>Weekly Analatyics</h3>
      <PieChart
        data={[
          { title: 'One', value: 10, color: 'rgba(1, 150, 1, 0.509)' },
          { title: 'Two', value: 15, color: 'rgba(244, 225, 14, 0.459)' },
          { title: 'Three', value: 20, color: 'rgba(244, 60, 14, 0.459)' },
        ]}
        lineWidth={50}
     />;

     <div className="data-res">
       <div className="col-box">
         <div className="col">

         </div>
         <p>June</p>
       </div>
       <div className="col-box">
         <div className="col non">

         </div>
         <p>July</p>
       </div>
       <div className="col-box">
         <div className="col egg">

         </div>
         <p>August</p>
       </div>
     </div>
      </div>
      
      <div className="add-uesr">
      <h3>Add new Bill</h3>
         <div className="add-box" onClick={()=>setShowModal(true)}>
          <GrAddCircle/> Add Bill
         </div>
      </div>
      <div className="qr-code">

      </div>
    </div>
    {showModal&&<UserModal setShowModal={setShowModal}/>}
    </>
  )
}

export default RigthSiderbar