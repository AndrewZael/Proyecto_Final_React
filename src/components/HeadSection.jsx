import React from 'react'

const HeadSection = ({ title, subtitle }) => {
  return (
    <header className='text-center my-5'>
        <h2 className='h1 fw-bold'>{ title }</h2>
        <p>{ subtitle }</p>
    </header>
  )
}

export default HeadSection;
