import React from 'react'
import { NavLink } from 'react-router-dom';

const ItemMenu = ({ icon, label, color = 'gray', to, responsive = false }) => {
  return (
    <li className='list-unstyled'>
      <NavLink to={`/${to}`} className={`btn d-flex text-decoration-none px-3 py-2 text-nowrap text-${color} ${responsive && 'flex-column flex-md-row'}`}>
        <span className="material-icons-outlined me-2">{ icon }</span> 
        <span className={responsive && 'small d-none d-sm-inline'}>{ label }</span>
      </NavLink>
    </li>
  )
}

export default ItemMenu;
