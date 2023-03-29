import React from 'react';
import Icon from './Icon';

const Filters = () => {
  return (
    <section id='filters'>
       <form className='px-3 py-4'>
            <label htmlFor='search' className='mb-1 small'>Buscar</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend border-start border-top border-bottom rounded-start p-2 bg-white">
                    <Icon icon='search' color='dark' />
                </div>
                <input id='search' className="form-control border border-start-0" placeholder="Ej: Seo, Chile" aria-label="Buscar" />
            </div>

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
                        <label htmlFor='pais-1' className='ms-2 text-dark small'>
                            Chile
                        </label>
                    </li>
                </ul>
            </section>

            <section title='Tags'>
                <b>Tags</b>
                <ul className='list-unstyled mt-1'>
                    <li className='mb-1'>
                        <input id='pais-1' type='checkbox' />
                        <label htmlFor='pais-1' className='ms-2 text-dark small'>
                            SEO
                        </label>
                    </li>
                </ul>
            </section>

       </form>
    </section>
  )
}

export default Filters;
