import React from 'react';
import Filters from '../components/Filters';
import Card from '../components/Card';
import HeadPage from '../components/HeadPage';

const Publications = () => {
  return (
    <main className='row mx-0'>
       <HeadPage title='Publicaciones' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' />
       <Filters styles='col-12 col-sm-5 col-md-4 col-lg-3 col-xl-2' />
       <section className='col-12 col-sm-7 col-md-9 col-lg-9 col-xl-10 pb-5 row mx-0 pt-5 mt-4' title='Publicaciones'>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
            <div className='col-12 col-sm-6 col-md-4 col-xl-3 mb-5 pb-4'><Card /></div>
       </section>
    </main>
  )
}

export default Publications;
