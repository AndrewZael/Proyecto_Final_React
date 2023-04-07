import React from 'react';
import Icon from './Icon';

const CardInfo = ({ icon, text, title }) => {
  return (
    <article className='custom-card text-primary rounded custom-shadow bg-light position-relative px-0'>
        <header className='text-center'>
            <div className='photo-user-card rounded-circle shadow-sm bg-light start-0 end-0 mx-auto border border-soft custom-shadow position-absolute d-flex justify-content-center align-items-center'>
                <Icon icon={icon} size={50} />
            </div>
        </header>
        <div className='position-relative overflow-hidden p-3 rounded-bottom'>
            <div className='info-card p-3 rounded border border-soft position-relative bg-light mt-5'>
                <div className='text-dark'>
                    <h5 className='h6 fw-bold'>{ title }</h5>
                    <p>{ text }</p>
                </div>
            </div>
            <div aria-hidden="true" className='decoration-card rounded-circle bg-primary position-absolute'></div>
        </div>
    </article>
  )
}

export default CardInfo;
