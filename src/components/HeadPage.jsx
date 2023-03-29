import React from 'react'

const HeadPage = ({ title, subtitle }) => {
  return (
    <header className='bg-secondary text-center d-flex justify-content-center text-light py-5 bg'>
        <div className='col-lg-3'>
            <h1>{ title }</h1>
            <p className='h5 fw-normal'>{ subtitle }</p>
        </div>
    </header>
  )
}

export default HeadPage;
