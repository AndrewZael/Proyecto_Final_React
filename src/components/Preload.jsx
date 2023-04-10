import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Preload = ({ 
  size, 
  showtext = true, 
  variant = 'primary', 
  flex = true, 
  text = 'Por favor espere…',
  center = false }) => {
  return (
    <div className={`h-100 justify-content-center align-items-center ${flex ? 'd-flex' : null} ${center ? 'text-center' : null}`}>
      <Spinner animation="border" variant={variant} size={size} role="status" /><br />
      { showtext ?
        <small className={flex ? 'ms-2' : null}>{ text }</small> : null
      }
    </div>
  )
}

export default Preload;
