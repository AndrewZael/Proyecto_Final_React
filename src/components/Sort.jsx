import React from 'react'
import { useContext } from 'react';
import Context from '../contexts/Context';
import Icon from './Icon';

const Sort = () => {
  const { filteredList, setFilteredList } = useContext(Context);
  const sortPublications = e => {

    let orderList = [];

    switch(e.target.value){
        case 'minor-to-major':
            orderList = filteredList.sort((a, b) => a.value - b.value);
            console.log('menor a mayor');
        break;
        case 'major-to-minor':
            orderList = filteredList.sort((a, b) => b.value - a.value);
            console.log('mayor a menor');
        break;
        case 'A-Z':
            orderList = filteredList.sort((a, b) => a.username.trim().localeCompare(b.username.trim()));
        break;
        default:
            orderList = filteredList.sort((a, b) => b.username.trim().localeCompare(a.username.trim()));
        break;
    }

    setFilteredList([...orderList]);
  }
  return (
    <>
        <label htmlFor='sort' className='mb-1 small'>Ordenar</label>

        <div className="input-group mb-sm-3">
            <div className="input-group-prepend border-start border-top border-bottom rounded-start p-2 bg-white">
                <Icon icon='filter_list' color='dark' />
            </div>
            <select onChange={sortPublications} id='sort' className="form-control border-start-0 border py-2" aria-label="Ordenar">
                <option value=''>Ordenar por</option>
                <option value='minor-to-major'>Valor menor a mayor</option>
                <option value='major-to-minor'>Valor mayor a menor</option>
                <option value='A-Z'>Nombre A - Z</option>
                <option value='Z-A'>Nombre Z - A</option>
            </select>
        </div>
    </>
  )
}

export default Sort;
