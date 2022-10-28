import React from 'react'
const PlateCard = ({img,text,bill}) => {
 

 
  return (
    <div   className={`plate-card`} >
        <img src={img} alt="add" />
        <button>{text}{bill}</button>
    </div>
  )
}

export default PlateCard