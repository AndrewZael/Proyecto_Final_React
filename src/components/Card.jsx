import React from 'react';
import Icon from './Icon';

const Card = ({ home = false }) => {
  return (
    <article className='text-primary rounded custom-shadow bg-light position-relative px-0' style={{ width: `${300}px` }}>

    <header className={`text-center ${home ? 'header-home-card d-flex position-relative' : ''}`}>
            <div role="img" className={`photo-user-card rounded-circle shadow-sm bg-secondary start-0 end-0 mx-auto border border-soft custom-shadow ${!home ? 'position-absolute' : 'position-relative'}`}></div>
            <div className={`${!home ? 'mb-1 pt-5' : 'text-start ms-2'}`}>
                <h2 className='h3 fw-bold mb-1'>Cecilia Ramirex</h2>
                <h3 className='h5 mb-0'>Mexico</h3>
            </div>
        </header>

        <div className='position-relative overflow-hidden p-3 rounded-bottom'>
            <div className='info-card p-3 rounded border border-soft position-relative bg-light'>
                <header className='row align-items-center'>
                    <div className='col-6'>
                        <data value='5.0' className='fw-bold h4 me-1'>5.0</data>
                        <small className='me-1'>USD</small> 
                        <b>hora</b>
                    </div>
                    <div className='text-end col-6'>
                        <button className='btn px-2 text-primary'>
                            <Icon icon="favorite" />
                        </button>
                        <button className='btn px-2 text-primary'>
                            <Icon icon="share" />
                        </button>
                    </div>
                </header>

                <div className='text-dark mt-4'>
                    <h5 className='h6 fw-bold'>Especialidad</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>

                <footer className='d-flex justify-content-between gap-2 mt-4'>
                    <button className='btn btn-sm btn-outline-primary rounded-pill w-100'>
                        MAS INFO
                    </button>
                    <button className='btn btn-sm btn-primary rounded-pill w-100'>
                        CONTACTAR
                    </button>
                </footer>
            </div>

            <div aria-hidden="true" className='decoration-card rounded-circle bg-primary position-absolute'></div>
        </div>
    </article>
  )
}

export default Card;
