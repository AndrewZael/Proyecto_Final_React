import React from 'react';
import HeadSection from '../components/HeadSection';
import Card from '../components/Card';
import CardInfo from '../components/CardInfo';
import Login from '../components/Login';
import Animation from '../components/Animation';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../contexts/Context';

const Home = () => {
  const { userLogin } = useContext(Context);
  return (
    <>
    <Animation />
    <main className='mx-auto container'>
      <section title='Principal' className={`row justify-content-between position-relative ${userLogin ? 'main-home-login pt-5 pb-3' : 'py-5'}`}>
        <div className={`col-11 mx-auto p-4 bg-light rounded ${userLogin ? 'd-flex flex-column justify-content-center shadow-sm' : 'col-md-6'}`}>
          <div className={userLogin ? 'col-md-9 col-xxl-7 mx-auto text-center' : 'col-12'}>
            <span className='bg-secondary p-5 d-inline-block rounded-circle'></span>
            <h1 className='fw-bold text-xxl'>
              Lorem ipsum dolor sit amet, consectetur.
            </h1>
            <p className='h5 fw-light'>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation.</p>
          </div>
        </div>
        { !userLogin ?
        <div className='col-12 col-md-5 col-xl-4'>
          <Login />
        </div> : null
        }
      </section>

      <section title='Publicaciones' className='row mb-5 pb-5 justify-content-around gap-4'>
        <HeadSection title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' />
          <div className='col-10 col-md-5 col-lg-4 col-xl-3 mb-5 mb-xl-0'>
            <Card home={true} />
          </div>
          <div className='col-10 col-md-5 col-lg-4 col-xl-3 mb-5 mb-xl-0'>
            <Card home={true} />
          </div>
          <div className='col-10 col-md-5 col-lg-4 col-xl-3 mb-5 mb-xl-0'>
            <Card home={true} />
          </div>
          <footer className='text-center mt-5'>
             <NavLink to='/publicaciones' className='btn btn-primary rounded-pill py-2 px-4'>VER TODAS</NavLink>
          </footer>
        </section>

        <section title='Beneficios' className='mb-4 py-4 mx-auto col-11 col-lg-7 justify-content-around gap-4'>
        <HeadSection title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' />
          <div className='row pt-5'>
            <div className='col-12 col-sm-6 mb-4 pb-5'>
              <CardInfo icon='check_circle' />
            </div>
            <div className='col-12 col-sm-6 mb-4 pb-5'>
              <CardInfo icon='lock' />
            </div>
            <div className='col-12 col-sm-6 mb-4 pb-5'>
              <CardInfo icon='language' />
            </div>
            <div className='col-12 col-sm-6 mb-4 pb-5'>
              <CardInfo icon='verified_user' />
            </div>
          </div>
        </section>
    </main>
    </>
  )
}

export default Home;
