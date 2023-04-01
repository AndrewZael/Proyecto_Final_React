import React from 'react'

const HeadProfile = ({ title, subtitle }) => {
  return (
    <header>
      <h2>{ title }</h2>
      <p>{ subtitle }</p>
    </header>
  )
}

export default HeadProfile;
