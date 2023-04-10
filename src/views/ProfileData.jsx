import React, { useState, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Icon from '../components/Icon';
import HeadProfile from '../components/HeadProfile';
import Context from '../contexts/Context';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, set, ref as refDatabase } from "firebase/database";
import Preload from '../components/Preload';
import openToast from '../shared/OpenToast';
import userPlaceholder from '../assets/img/user.png';
 
const ProfileData = () => {

   const { user, setUser, setInfoFeedBack } = useContext(Context);
   const [file, setFile] = useState('');
   const [preload, setPreload] = useState(false);

   const storage = getStorage();
   const userImageRef = ref(storage, `users/${user.user_id}/${user.user_id}`);  

   useEffect(() => {
      file !== '' && uploadImage();
      // eslint-disable-next-line
   }, [file]);  

  const uploadImage = () => {
    setPreload(true);
    uploadBytes(userImageRef, file).then(snapshot => {
        getImageUrl();
        setInfoFeedBack(openToast(
            'success',
            '¡Imagen subida con éxito!',
            'Tu nueva imagen ya está disponible en tu perfil.'
        ));
      }).catch(() => { 
        setInfoFeedBack(openToast(
            'danger',
            '¡Ups! Lo sentimos',
            'Un error ha ocurrido al cargar tu archivo, por favor inténtalo nuevamente.'
        ));
        setPreload(false);
      });
  };

  const getImageUrl = () => {
    getDownloadURL(ref(storage, `users/${user.user_id}/${user.user_id}`)).then(img => {
        user.profile_picture = img;
        setUser({...user});
        set(refDatabase(getDatabase(), `users/${user.user_id}/profile_picture`), user.profile_picture);
        setPreload(false);
        setFile('');
    }).catch(error => {
        console.error(error);
        setPreload(false);
    });
  };

  const getFile = () => {
    const inputFile = document.getElementById('file');
    inputFile.click();
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = e => {
        const blob = new Blob([e.target.result], { type: file.type });
        setFile(blob);
    }
    reader.readAsArrayBuffer(file);
  };

  const updateProfile = e => {
    setPreload(true);
    e.preventDefault();
    if(e.currentTarget.checkValidity()){
        setUser({...user});
        set(refDatabase(getDatabase(), `users/${user.user_id}`), user).then(() => {
            setPreload(false);
            setInfoFeedBack(openToast(
                'success',
                '¡Perfil actualizado!',
                'La información de tu perfil se actualizó correctamente.'
            ));
        }).catch(() => {
            setInfoFeedBack(openToast(
                'danger',
                '¡Ups! Lo sentimos',
                'No hemos logrado actualizar tu perfil, por favor inténtalo nuevamente.'
            ));
        });
    }
  };

  return (
    <>
        <HeadProfile title='Mis datos' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' />
        <Form onSubmit={updateProfile}>
            <div className='photo-profile text-center mb-4 pb-4 border-bottom flex-column d-flex align-items-center'>
                <label htmlFor='file' className='col-12 fw-bold mb-1 text-dark pointer-event-none'>Foto de perfil</label>
                <span className='bg bg-secondary position-relative rounded-circle d-inline-block' style={{ backgroundImage: `url(${
                    [undefined, null, ''].includes(user.profile_picture) ? 
                        userPlaceholder : user.profile_picture
                })` }}>
                    { !preload ?
                        <button onClick={() => getFile()} title='Foto de perfil' type='button' className='btn btn-sm btn-light rounded-circle position-absolute shadow-sm border-soft'>
                            <Icon icon='add_photo_alternate' />
                        </button> : <Preload variant='light' showtext={false} />
                    }
                    <input id='file' onChange={e => handleFile(e)} type='file' className='d-none' accept='.jpg, .png' />
                </span>
            </div>

            <Form.Group>
                <Form.Label className='small mb-1 fw-bold'>Nombre de usuario</Form.Label>
                <Form.Control onKeyUp={e => user.username = e.target.value} placeholder={ user.username || 'Username' } className='py-2' required></Form.Control>
            </Form.Group>
            <div className='row my-3'>
                <Form.Group className='col-12 col-sm-6 mb-3 mb-sm-0'>
                    <Form.Label className='small mb-1 fw-bold'>Nombre</Form.Label>
                    <Form.Control onKeyUp={e => user.name = e.target.value} placeholder={user.name || 'Primer nombre'} className='py-2'></Form.Control>
                </Form.Group>
                <Form.Group className='col-12 col-sm-6 '>
                    <Form.Label className='small mb-1 fw-bold'>Apellido</Form.Label>
                    <Form.Control onKeyUp={e => user.lastname = e.target.value} placeholder={user.lastname || 'Primer apellido'} className='py-2'></Form.Control>
                </Form.Group>
            </div>
            <Form.Group>
                <Form.Label className='small mb-1 fw-bold'>Email</Form.Label>
                <Form.Control type='email' placeholder={user.email || 'username@gmail.com'} className='py-2' disabled></Form.Control>
            </Form.Group>

            { user.provider_Id !== 'google.com' ?
            <div className='row mt-3'>
                <Form.Group className='col-12 col-sm-6 mb-3 mb-sm-0'>
                    <Form.Label className='small mb-1 fw-bold'>Contraseña</Form.Label>
                    <Form.Control type='password' placeholder='******' className='py-2'></Form.Control>
                </Form.Group>
                <Form.Group className='col-12 col-sm-6'>
                    <Form.Label className='small mb-1 fw-bold'>Confirmar contraseña</Form.Label>
                    <Form.Control type='password' placeholder='******' className='py-2'></Form.Control>
                </Form.Group>
            </div> : null
            }

            <button type='submit' className='btn btn-sm px-4 py-2 float-end btn-primary rounded-pill mt-4' title='Actualizar perfil' disabled={preload}>
                { preload ? 'Por favor espere...' : 'ACTUALIZAR PERFIL' }
            </button>
        </Form>
    </>
  )
}

export default ProfileData;
