import React from 'react';
import Filters from '../components/Filters';
import Card from '../components/Card';
import HeadPage from '../components/HeadPage';
import { useContext } from 'react';
import Context from '../contexts/Context';
import Message from '../components/Message';
import imgVoid from '../assets/img/void.svg';

const Publications = () => {
  const { filteredList } = useContext(Context);
  return (
    <main className='row mx-0'>
       <HeadPage title='Publicaciones' subtitle='Descubre todas las publicaciones y novedades.' />
       <Filters styles='col-12 col-sm-4 col-md-4 col-lg-3 col-xl-2' />
       <section className='col-12 col-sm-8 col-md-8 col-lg-9 col-xl-10 pb-5 row mx-0 pt-5 mt-4' title='Publicaciones'>
            { filteredList.length === 0 ? 
              <Message img={imgVoid} 
              title='Sin resultados.' 
              subtitle='No se han encontrado resultados para tu búsqueda.' /> :
              filteredList.map(publication => (
                <div key={publication.publication_id} className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-5 pb-4'>
                  <Card obj={publication} />
                </div>
              ))
            }
       </section>
    </main>
  )
}

export default Publications;
