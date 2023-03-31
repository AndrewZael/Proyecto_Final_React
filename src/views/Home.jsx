import React from 'react';
import HeadSection from '../components/HeadSection';
import Card from '../components/Card';
import CardInfo from '../components/CardInfo';
import Login from '../components/Login';
import Animation from '../components/Animation';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Animation />
    <main className='mx-auto container'>
      <section title='Principal' className='row justify-content-between py-5 position-relative'>
        <div className='col-12 col-md-6 p-4 bg-light rounded'>
          <h1 className='fw-bold text-xxl'>
            Lorem ipsum dolor sit amet, consectetur.
          </h1>
          <p className='h5 fw-light'>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation.</p>
        </div>
        <div className='col-12 col-md-4'>
          <Login />
        </div>
      </section>

      <section title='Publicaciones' className='row mb-5 py-5 justify-content-around gap-4'>
        <HeadSection title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' />
          <div className='col-12 col-sm-6 col-md-4 col-xl-3'>
            <Card home={true} />
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-xl-3'>
            <Card home={true} />
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-xl-3'>
            <Card home={true} />
          </div>
          <footer className='text-center mt-5'>
             <NavLink to='/publicaciones' className='btn btn-primary rounded-pill py-2 px-4'>VER TODAS</NavLink>
          </footer>
        </section>

        <section title='Beneficios' className='mb-4 py-4 mx-auto col-7 justify-content-around gap-4'>
        <HeadSection title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' />
          <div className='row pt-5'>
            <div className='col-12 col-sm-6 mb-4 pb-5'>
              <CardInfo />
            </div>
            <div className='col-12 col-sm-6 mb-4 pb-5'>
              <CardInfo />
            </div>
            <div className='col-12 col-sm-6 mb-4 pb-5'>
              <CardInfo />
            </div>
            <div className='col-12 col-sm-6 mb-4 pb-5'>
              <CardInfo />
            </div>
          </div>
        </section>
    </main>
    </>
  )
}

export default Home;
