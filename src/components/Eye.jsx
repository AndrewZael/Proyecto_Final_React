import React from 'react'
import Icon from './Icon'

const Eye = ({ passwordVisible, setPasswordVisible }) => {
  return (
    <span className="input-group-text bg-transparent border border-start-0">
        <button type='button' onClick={() => setPasswordVisible(!passwordVisible)} className='btn p-0'>
            <Icon icon={passwordVisible ? 'visibility_off' : 'visibility'} />
        </button>
    </span>
  )
}

export default Eye
