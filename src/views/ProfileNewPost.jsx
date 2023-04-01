import React from 'react';
import HeadProfile from '../components/HeadProfile';
import Form from 'react-bootstrap/Form';

const ProfileNewPost = () => {
  return (
    <>
        <HeadProfile title='Nueva publicación' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' />
        <Form>
            <Form.Group className='mb-4'>
                <Form.Label className='small mb-1 fw-bold text-dark'>Nombre de usuario</Form.Label>
                <Form.Control required placeholder='Username' className='py-2'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label className='small mb-1 fw-bold text-dark'>Descríbete en una frase</Form.Label>
                <Form.Control required placeholder='Lorem ipsum dolor sit amet' className='py-2'></Form.Control>
                <Form.Text className='text-gray text-small'>Cantidad máxima de caracteres 50 / 100</Form.Text>
            </Form.Group>
            <div className='row mb-4'>
              <Form.Group className='col-12 col-sm-6 mb-3 mb-md-0'>
                <Form.Label className='small mb-1 fw-bold text-dark'>País</Form.Label>
                <Form.Select className='py-2'>
                  <option>Selecciona tu país</option>
                  <option>Chile</option>
                  <option>Colombia</option>
                  <option>Mexico</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='col-12 col-sm-6'>
                <Form.Label className='small mb-1 fw-bold text-dark'>Especialidad</Form.Label>
                <Form.Select className='py-2'>
                 <option>Selecciona tu especialidad</option>
                 <option>SEO</option>
                 <option>SEM</option>
                 <option>Wordpress</option>
                </Form.Select>
              </Form.Group>
            </div>
            <Form.Group className='mb-4'>
              <Form.Label className='small mb-1 fw-bold text-dark'>En pocas palabras cuéntanos un poco de ti</Form.Label>
              <textarea className='form-control' rows={4} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'></textarea>
              <Form.Text className='text-gray text-small'>Cantidad máxima de caracteres 0 / 140</Form.Text>
            </Form.Group>
            <Form.Group className='mb-4'>
              <Form.Label className='small mb-1 fw-bold text-dark'>Cuéntanos sobre tus experiencias y habilidades</Form.Label>
              <textarea className='form-control' rows={5} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in .'></textarea>
              <Form.Text className='text-gray text-small'>Cantidad máxima de caracteres 0 / 400</Form.Text>
            </Form.Group>
            <Form.Group className='w-100 mb-4'>
                <Form.Label className='small mb-1 fw-bold text-dark'>Skills</Form.Label>
                <Form.Select className='py-2'>
                 <option>Selecciona tus skills</option>
                 <option>SEO</option>
                 <option>SEM</option>
                 <option>Wordpress</option>
                </Form.Select>
                <Form.Text className='text-gray text-small'>Puedes seleccionar todos los que necesites, según tu perfil</Form.Text>
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label className='small mb-1 fw-bold text-dark'>Valor por tu servicio por hora</Form.Label>
                <Form.Control required type='number' placeholder='Ej: 10.5' className='py-2'></Form.Control>
                <Form.Text className='text-gray text-small'>Ingresa un valor en dólares</Form.Text>
            </Form.Group>

            <h2 className='mb-1 h5 fw-bold'>Datos de contacto</h2>
            <small className='mb-4 d-block'><span className='text-danger fw-bold'>*</span>Estos datos solo serán visibles para los usuarios que estén suscritos y puedan contactarte.</small>
            <div className='row mb-4'>
              <Form.Group className='col-12 col-sm-6 mb-3 mb-md-0'>
                <Form.Label className='small mb-1 fw-bold text-dark'>Whatsapp</Form.Label>
                <Form.Control required placeholder='Ej: +5691112233' className='py-2' />
                <Form.Text className='text-gray text-small'>Formato +569 99214 11 00</Form.Text>
              </Form.Group>
              <Form.Group className='col-12 col-sm-6'>
                <Form.Label className='small mb-1 fw-bold text-dark'>Email</Form.Label>
                <Form.Control required type='email' placeholder='mail@mail.com' className='py-2' />
              </Form.Group>
            </div>
            <Form.Group className='mb-4'>
                <Form.Label className='small mb-1 fw-bold text-dark'>Linkedin</Form.Label>
                <Form.Control required type='url' placeholder='https://www.linkedin.com/in/tu-linkedin' className='py-2'></Form.Control>
            </Form.Group>
            <button className='btn btn-sm px-4 py-2 float-end btn-primary rounded-pill mt-4'>
                ACTUALIZAR PERFIL
            </button>
        </Form>
    </>
  )
}

export default ProfileNewPost;
