import React from 'react';
import Filter from './Filter';
import Search from './Search';
import Sort from './Sort';

const Filters = ({ styles }) => {
  return (
    <section id='filters' className={styles}>
       <form className='px-3 py-4 position-sticky overflow-auto'>
            <Search />
            <Sort />
            <Filter />
       </form>
    </section>
  )
}

export default Filters;
