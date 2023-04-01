import React from 'react';
import Form from 'react-bootstrap/Form';
import Icon from '../components/Icon';
import HeadProfile from '../components/HeadProfile';

const ProfileData = () => {
  return (
    <>
        <HeadProfile title='Mis datos' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' />
        <Form>
            <div className='photo-profile text-center mb-4 pb-4 border-bottom'>
                <label className='col-12 fw-bold mb-1 text-dark'>Foto de perfil</label>
                <span className='bg bg-secondary position-relative rounded-circle d-inline-block'>
                    <button title='Foto de perfil' type='button' className='btn btn-sm btn-light rounded-circle position-absolute shadow-sm border-soft'>
                        <Icon icon='add_photo_alternate' />
                    </button>
                </span>
                <input type='file' className='d-none' />
            </div>

            <Form.Group>
                <Form.Label className='small mb-1 fw-bold'>Nombre de usuario</Form.Label>
                <Form.Control placeholder='Username' className='py-2'></Form.Control>
            </Form.Group>
            <div className='row my-3'>
                <Form.Group className='col-12 col-sm-6 mb-3 mb-sm-0'>
                    <Form.Label className='small mb-1 fw-bold'>Nombre</Form.Label>
                    <Form.Control placeholder='Pedro' className='py-2'></Form.Control>
                </Form.Group>
                <Form.Group className='col-12 col-sm-6 '>
                    <Form.Label className='small mb-1 fw-bold'>Apellido</Form.Label>
                    <Form.Control placeholder='Perez' className='py-2'></Form.Control>
                </Form.Group>
            </div>
            <Form.Group>
                <Form.Label className='small mb-1 fw-bold'>Email</Form.Label>
                <Form.Control type='email' placeholder='username@gmail.com' className='py-2'></Form.Control>
            </Form.Group>
            <div className='row mt-3'>
                <Form.Group className='col-12 col-sm-6 mb-3 mb-sm-0'>
                    <Form.Label className='small mb-1 fw-bold'>Contraseña</Form.Label>
                    <Form.Control type='password' placeholder='******' className='py-2'></Form.Control>
                </Form.Group>
                <Form.Group className='col-12 col-sm-6'>
                    <Form.Label className='small mb-1 fw-bold'>Confirmar contraseña</Form.Label>
                    <Form.Control type='password' placeholder='******' className='py-2'></Form.Control>
                </Form.Group>
            </div>

            <button type='button' className='btn btn-sm px-4 py-2 float-end btn-primary rounded-pill mt-4'>
                ACTUALIZAR PERFIL
            </button>
        </Form>
    </>
  )
}

export default ProfileData;
