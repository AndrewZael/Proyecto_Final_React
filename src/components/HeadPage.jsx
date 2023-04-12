import React from 'react';

const HeadPage = ({ title, subtitle }) => {
  return (
    <header className='bg-secondary text-center d-flex justify-content-center text-light py-4 bg'>
        <div className='col-lg-6 px-4'>
            <h1>{ title }</h1>
            <p className='h5 fw-normal' dangerouslySetInnerHTML={{ __html: subtitle }}></p>
        </div>
    </header>
  )
}

export default HeadPage;
