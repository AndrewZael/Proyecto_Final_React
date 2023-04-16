import React from 'react';
import { useContext } from 'react';
import Context from '../contexts/Context';
import Icon from './Icon';

const Search = () => {

  const { 
    publications, 
    setFilteredList
    }  = useContext(Context);
  const searchPublications = e => {
    const val = e.target.value;
    const newList = publications.filter(p => 
        (
            p ? JSON.stringify(p).normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(val.toLowerCase()) : 
            publications
        )
    );
    setFilteredList(newList);
  }

  return (
    <>
        <label htmlFor='search' className='mb-1 small'>Buscar</label>
        <div className="input-group mb-3">
            <div className="input-group-prepend border-start border-top border-bottom rounded-start p-2 bg-white">
                <Icon icon='search' color='dark' />
            </div>
            <input onChange={searchPublications} id='search' className="form-control border border-start-0" placeholder="Ej: Seo, Chile" aria-label="Buscar" />
        </div>
    </>
  )
}

export default Search;
