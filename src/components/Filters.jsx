import React, { useContext } from 'react';
import Context from '../contexts/Context';
import Filter from './Filter';
import Icon from './Icon';
import Search from './Search';
import Sort from './Sort';

const Filters = ({ styles }) => {
  const { setShowModalFilters } = useContext(Context);
  return (
    <section id='filters' className={styles}>
       <form className='px-1 px-sm-3 py-sm-4 mt-2 mt-sm-3 position-sticky overflow-auto'>
            <Search />
            <Sort />
            <Filter styles='d-none d-sm-block' />
            <footer className='px-1 d-flex justify-content-end d-sm-none'>
              <button type='button' onClick={() => setShowModalFilters(true)} className='btn d-flex my-2'>
                  <Icon icon={'tune'} />
                  <span className='ms-2'>Filtrar</span>
              </button>
            </footer>
       </form>
    </section>
  )
}

export default Filters;
