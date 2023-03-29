import React from 'react'

const ItemMenu = ({ icon, label, to }) => {
  return (
    <li className='list-unstyled'>
      <a className='btn d-flex text-decoration-none px-3 py-2 btn-light text-nowrap'>
        <span className="material-icons-outlined me-2">{ icon }</span> 
        { label }
      </a>
    </li>
  )
}

export default ItemMenu;
