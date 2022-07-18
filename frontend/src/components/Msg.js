import React from 'react'

export const Msg = ({msg,show}) => {
  return (
    <div className={`msg ${show&&'show'}`}>
    <p>{msg}</p>
    </div>
  )
}
