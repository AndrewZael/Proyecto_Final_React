import React from 'react'

const Value = ({ val, sizeData = 1.75, sizeCode = 1 , sizeHrs =  0.875}) => {
  return (
    <div className='text-primary'>
        <data value='5.0' className='fw-bold me-1'
        style={{ fontSize: `${sizeData}rem` }}>{ val }</data>
        <small className='me-1'
        style={{ fontSize: `${sizeCode}rem` }}>USD</small> 
        <b style={{ fontSize: `${sizeHrs}rem` }}>hora</b>
    </div>
  )
}

export default Value;
