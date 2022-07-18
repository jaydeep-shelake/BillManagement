import React from 'react'
const PlateCard = ({text,img,i,active,setActiveIndex,setDetails}) => {
  const handleOnClick=()=>{
    setDetails({text,img})
    setActiveIndex(i)
  }

 
  return (
    <div   className={`plate-card ${active&&'active'}`} onClick={handleOnClick}>
        <img src={img} alt="add" />
        <button>{text}</button>
    </div>
  )
}

export default PlateCard