import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Icon from './Icon';

const AlertMessage = ({ variant = 'success', icon = 'check_circle', text }) => {
  return (
    <Alert className='py-2 d-flex align-items-center' variant={variant}>
         <Icon icon={icon} color={variant} /> <span className='ms-2'>{ text }</span>
     </Alert>
  )
}

export default AlertMessage;
