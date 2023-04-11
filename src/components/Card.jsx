import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Value from './Value';
import Fav from '../components/Fav';
import Share from '../components/Share';
import Context from '../contexts/Context';
import ContactButton from './ContactButton';

const Card = ({ home = false, obj }) => {
  
  const { user } =  useContext(Context);

  return (
    <article className='custom-card text-primary rounded custom-shadow bg-light position-relative px-0'>
        <header className={`text-center ${home ? 'header-home-card d-flex position-relative' : ''}`}>
            <div role="img" className={`bg photo-user-card rounded-circle shadow-sm bg-secondary border border-soft custom-shadow ${!home ? 'position-absolute start-0 end-0 mx-auto' : 'position-relative'}`} style={{ backgroundImage: `url(${obj?.profile_picture})` }}></div>
            <div className={`${!home ? 'mb-1 pt-5' : 'text-start ms-2'}`}>
                <h2 className='h3 fw-bold my-1'>{ obj?.username }</h2>
                <h3 className='h5 mb-0'>{ obj?.country.label }</h3>
            </div>
        </header>
        <div className='position-relative overflow-hidden p-3 rounded-bottom'>
            <div className='info-card p-3 rounded border border-soft position-relative bg-light'>
                <header className='row align-items-center'>
                    <div className='col-6'>
                        <Value val={obj?.value}  />
                    </div>
                    <div className='text-end col-6'>
                        <Fav id={obj?.publication_id} 
                        fav={user.favorites?.some(f => f.publication_id === obj?.publication_id)} />
                        <Share id={obj?.publication_id} />
                    </div>
                </header>
                <div className='text-dark mt-4'>
                    <h5 className='h6 fw-bold'>{ obj?.specialty.label }</h5>
                    <p>{ obj?.about_you }</p>
                </div>

                <footer className='d-flex justify-content-between gap-2 mt-4'>
                    <NavLink to={`/detalle/${obj?.publication_id}`} className='btn btn-sm btn-outline-primary rounded-pill w-100' 
                    title={`Más información de ${obj?.username}`}>
                        MAS INFO
                    </NavLink>
                    <ContactButton obj={obj} />
                </footer>
            </div>
            <div aria-hidden="true" className='decoration-card rounded-circle bg-primary position-absolute'></div>
        </div>
    </article>
  )
}

export default Card;
