import React from 'react'

const Icon = ({ icon, color = '', size = 24 }) => {
  return (
    <span className={`material-icons-outlined align-middle text-${color}`} style={{ fontSize: `${size}px` }}>
      { icon }
    </span>
  )
}

export default Icon;
