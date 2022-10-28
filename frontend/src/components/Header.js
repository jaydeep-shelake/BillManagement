import React,{useState} from 'react'
import '../styles/header.css'
import {FiSearch} from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { getAllBils } from '../actions'
import { useLocation } from 'react-router-dom'
const Header = () => {
  const [search,setSearch]=useState('')
  // const  location = useLocation()
  // const pathname = location.pathname
 const dispatch=useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const location= search.charAt(0).toUpperCase()+search.slice(1)
    console.log(location)
    dispatch(getAllBils(location))
    
  }
  return (
    <div className='header'>
      <div className="logo">
         <span>DS</span>
         <p>Logo</p>
      </div>
      <form className="search" onSubmit={handleSubmit}>
          <div className="input-box">
           <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
           <FiSearch/>
          </div>
      </form>
      <div className="user-details">
          <div className="user-icon">
           <p>A</p>
          </div>
          <div className="notification">

          </div>
      </div>
    </div>
  )
}

export default Header