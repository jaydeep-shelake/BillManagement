import React from 'react'
import '../styles/sidebar.css'
import {MdInsertChart} from 'react-icons/md'
import {AiFillSetting} from 'react-icons/ai'
import {BsFillFileEarmarkCheckFill} from 'react-icons/bs'
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const  location = useLocation()
  const pathname = location.pathname
  console.log(pathname)
  return (
    <div className='sidebar'>
      <div className="links">
    <Link to="/">  <div className={`link ${pathname==="/"&&'active'}`}>
        <div className="icon">
        <MdInsertChart/>
        </div>
        <p>Home</p>
      </div> </Link>
     <Link to="/allBills"> <div className={`link ${pathname==="/bills/allBills"&&'active'}`}>
        <div className="icon">
        <BsFillFileEarmarkCheckFill/>
        </div>
        <p>History</p>
      </div></Link>
      <Link to="/analytics"> <div className={`link ${pathname==="/cas"&&'active'}`}>
        <div className="icon">
        <MdInsertChart/>
        </div>
        <p>Overview</p>
      </div></Link>
      <div className="link">
        <div className="icon">
        <AiFillSetting/>
        </div>
        <p>Setting</p>
      </div>
      </div>
    </div>
  )
}

export default Sidebar