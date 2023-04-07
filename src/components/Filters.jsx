import React from 'react';
import Search from './Search';

const Filters = ({ styles }) => {
  return (
    <section id='filters' className={styles}>
       <form className='px-3 py-4 position-sticky'>
            <Search />
            <label htmlFor='search' className='mb-1 small'>Ordenar</label>
            <div className="input-group mb-3">
                <select id='search' className="form-control border py-2" aria-label="Ordenar">
                    <option>Ordenar por</option>
                    <option>Valor</option>
                    <option>Nombre</option>
                </select>
            </div>

            <section title='Países'>
                <b>País</b>
                <ul className='list-unstyled mt-1'>
                    <li className='mb-1'>
                        <input id='pais-1' type='checkbox' />
                        <label htmlFor='pais-1' className='ms-2 text-dark small'>Chile</label>
                    </li>
                    <li className='mb-1'>
                        <input id='pais-2' type='checkbox' />
                        <label htmlFor='pais-2' className='ms-2 text-dark small'>Mexico</label>
                    </li>
                    <li className='mb-1'>
                        <input id='pais-3' type='checkbox' />
                        <label htmlFor='pais-3' className='ms-2 text-dark small'>Alemania</label>
                    </li>
                </ul>
            </section>

            <section title='Tags'>
                <b>Skills</b>
                <ul className='list-unstyled mt-1'>
                    <li className='mb-1'>
                        <input id='skill-1' type='checkbox' />
                        <label htmlFor='skill-1' className='ms-2 text-dark small'>SEO</label>
                    </li>
                    <li className='mb-1'>
                        <input id='skill-2' type='checkbox' />
                        <label htmlFor='skill-2' className='ms-2 text-dark small'>SEM</label>
                    </li>
                    <li className='mb-1'>
                        <input id='skill-3' type='checkbox' />
                        <label htmlFor='skill-3' className='ms-2 text-dark small'>Google ADS</label>
                    </li>
                </ul>
            </section>

       </form>
    </section>
  )
}

export default Filters;
