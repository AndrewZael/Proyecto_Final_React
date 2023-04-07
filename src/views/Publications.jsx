import React from 'react';
import Filters from '../components/Filters';
import Card from '../components/Card';
import HeadPage from '../components/HeadPage';
import { useContext } from 'react';
import Context from '../contexts/Context';

const Publications = () => {
  const { filteredList } = useContext(Context);
  return (
    <main className='row mx-0'>
       <HeadPage title='Publicaciones' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' />
       <Filters styles='col-12 col-sm-4 col-md-4 col-lg-3 col-xl-2' />
       <section className='col-12 col-sm-8 col-md-8 col-lg-9 col-xl-10 pb-5 row mx-0 pt-5 mt-4' title='Publicaciones'>
            {
              filteredList.map(publication => (
                <div key={publication.publication_id} className='col-12 col-lg-6 col-xl-3 mb-5 pb-4'>
                  <Card obj={publication} />
                </div>
              ))
            }
       </section>
    </main>
  )
}

export default Publications;
