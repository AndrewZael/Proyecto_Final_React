import React from 'react';
import Icon from './Icon';

const CardInfo = () => {
  return (
    <article className='text-primary rounded custom-shadow bg-light position-relative px-0' style={{ width: '300px' }}>
        <header className='text-center'>
            <div className='photo-user-card rounded-circle shadow-sm bg-light start-0 end-0 mx-auto border border-soft custom-shadow position-absolute d-flex justify-content-center align-items-center'>
                <Icon icon='home' size={50} />
            </div>
        </header>

        <div className='position-relative overflow-hidden p-3 rounded-bottom'>
            <div className='info-card p-3 rounded border border-soft position-relative bg-light mt-5'>
                <div className='text-dark'>
                    <h5 className='h6 fw-bold'>Especialidad</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
            </div>

            <div aria-hidden="true" className='decoration-card rounded-circle bg-primary position-absolute'></div>
        </div>
    </article>
  )
}

export default CardInfo;
