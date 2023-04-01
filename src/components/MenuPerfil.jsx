import React from 'react';
import ItemMenu from './ItemMenu'; 

const MenuPerfil = () => {
  return (
    <nav className='menu-profile rounded mb-4 mb-md-0'>
        <ul className='list-unstyled bg-transparent my-2 d-flex flex-md-column flex-wrap justify-content-center justify-content-md-start'>
            <ItemMenu responsive={true} label='Mis datos' icon='person' to='perfil/mis-datos' />
            <ItemMenu responsive={true} label='Mis favoritos' icon='favorite' to='perfil/favoritos' />
            <ItemMenu responsive={true} label='Mis publicaciones' icon='article' to='perfil/mis-publicaciones' />
            <ItemMenu responsive={true} label='Nueva publicación' icon='post_add' to='perfil/nueva-publicacion' />
        </ul>
    </nav>
  )
}

export default MenuPerfil;
