import React, { useState, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Icon from '../components/Icon';
import HeadProfile from '../components/HeadProfile';
import Context from '../contexts/Context';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, set, ref as refDatabase } from "firebase/database";
import { getAuth, updateEmail, updatePassword } from 'firebase/auth';
import Preload from '../components/Preload';
import openToast from '../shared/OpenToast';
import userPlaceholder from '../assets/img/user.png';
import AlertMessage from '../components/AlertMessage';
import { useNavigate } from 'react-router-dom';
import Eye from '../components/Eye';
 
const ProfileData = () => {

   const { user, setUser, setInfoFeedBack, setUserLogin } = useContext(Context);
   const [file, setFile] = useState('');
   const [preload, setPreload] = useState(false);
   const [passwordsNoMatch, setPasswordsNoMatch] = useState(false);
   const [alertPassword, setAlertPassword] = useState(false);
   const [password, setPassword] = useState('');
   const [passwordConfirm, setPasswordConfirm] = useState('');
   const [passwordVisible, setPasswordVisible] = useState(false);
   const [passwordVisibleConfirm, setPassworVisibledConfirm]= useState(false);

   const navigate = useNavigate();
   const storage = getStorage();
   const auth = getAuth();
   const userImageRef = ref(storage, `users/${user?.user_id}/${user?.user_id}`);  

   useEffect(() => {
      file !== '' && uploadImage();
      // eslint-disable-next-line
   }, [file]);
   
   useEffect(() => {
        if((password !== '' || passwordConfirm !== '') && password !== passwordConfirm){
            setPasswordsNoMatch(true);
        }else{
            setPasswordsNoMatch(false);
        }

        if((password !== '' && passwordConfirm !== '') && password !== passwordConfirm){
            setAlertPassword(true);
        }else if((password !== '' && passwordConfirm !== '') && password === passwordConfirm){
            setAlertPassword(false);
        }

   }, [password, passwordConfirm, setPasswordsNoMatch]);

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
        set(refDatabase(getDatabase(), `users/${user.user_id}/profile_picture`), user?.profile_picture);
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

  const updatePass = () => {
    if(user?.provider_Id === 'password'){
        if((password !== '' && passwordConfirm !== '') && password === passwordConfirm){
            return updatePassword(auth.currentUser, password);
        }else{
            return new Promise((resolve, reject) => {
                resolve();
            })
        }
    }else{
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
  }

  const updateProfile = e => {
    setPreload(true);
    e.preventDefault();

    if(e.currentTarget.checkValidity()){
        setUser({...user});
        updateEmail(auth.currentUser, user.email).then(() => {
            updatePass().then(() => {
                set(refDatabase(getDatabase(), `users/${user.user_id}`), user)
                .then(() => {
                    setPreload(false);
                    setInfoFeedBack(openToast(
                        'success',
                        '¡Perfil actualizado!',
                        'La información de tu perfil se actualizó correctamente, por favor, vuelve a iniciar sesión. '
                    ));
                    if(user?.provider_Id === 'password' && password !== '' && passwordConfirm !== ''){
                        auth.signOut().then(() => {
                            setUserLogin(false);
                            setUser({})
                            navigate('/login');
                        }).catch(error => console.log(error));
                    }

                }).catch(error => console.log(error));
            }).catch(error => console.log(error));
        }).catch(error => {
            console.log(error);
            setPreload(false);
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
        <HeadProfile title='Mis datos' subtitle='Aquí puedes ver y actualizar tu información personal. Desde cambiar tu imagen de perfil hasta actualizar tus datos de contacto. Asegúrate de que tu información siempre esté actualizada.' />
        <Form onSubmit={updateProfile} className='mt-4'>
            <div className='photo-profile text-center mb-4 pb-4 border-bottom flex-column d-flex align-items-center'>
                <label htmlFor='file' className='col-12 fw-bold mb-1 text-dark pointer-event-none'>Foto de perfil</label>
                <span className='bg bg-secondary position-relative rounded-circle d-inline-block' style={{ backgroundImage: `url(${
                    [undefined, null, ''].includes(user?.profile_picture) ? 
                        userPlaceholder : user?.profile_picture
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
                <Form.Control defaultValue={user?.username} onKeyUp={e => user.username = e.target.value} placeholder='Nombre de usuario' className='py-2' required></Form.Control>
            </Form.Group>
            <div className='row my-3'>
                <Form.Group className='col-12 col-sm-6 mb-3 mb-sm-0'>
                    <Form.Label className='small mb-1 fw-bold'>Nombre</Form.Label>
                    <Form.Control defaultValue={user?.name} onKeyUp={e => user.name = e.target.value} placeholder='Primer nombre' className='py-2'></Form.Control>
                </Form.Group>
                <Form.Group className='col-12 col-sm-6 '>
                    <Form.Label className='small mb-1 fw-bold'>Apellido</Form.Label>
                    <Form.Control defaultValue={user?.lastname} onKeyUp={e => user.lastname = e.target.value} placeholder='Primer apellido' className='py-2'></Form.Control>
                </Form.Group>
            </div>
            <Form.Group>
                <Form.Label className='small mb-1 fw-bold'>Email</Form.Label>
                <Form.Control type='email' onKeyUp={e => user.email = e.target.value} required defaultValue={user?.email} placeholder='username@gmail.com' className='py-2' disabled={user?.provider_Id === 'google.com'}></Form.Control>
            </Form.Group>

            { user?.provider_Id !== 'google.com' ?
            <div className='row mt-3'>
                <Form.Group className='col-12 col-sm-6 mb-3 mb-sm-0'>
                    <Form.Label className='small mb-1 fw-bold'>Contraseña</Form.Label>
                    <div className='input-group'>
                        <Form.Control pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$' 
                        onKeyUp={e => setPassword(e.target.value)} type={passwordVisible ? 'text' : 'password'} placeholder='******' className='py-2 border-end-0 border'></Form.Control>
                        <Eye 
                            passwordVisible={passwordVisible}
                            setPasswordVisible={setPasswordVisible} />
                    </div>
                    <Form.Text className='text-gray text-small'>
                        Mínimo 6 caracteres y solo debe contener números y letras.
                    </Form.Text>
                </Form.Group>
                <Form.Group className='col-12 col-sm-6'>
                    <Form.Label className='small mb-1 fw-bold'>Confirmar contraseña</Form.Label>
                    <div className='input-group'>
                        <Form.Control pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$' onKeyUp={e => setPasswordConfirm(e.target.value)} type={passwordVisibleConfirm ? 'text' : 'password'} placeholder='******' className='py-2 border-end-0 border'></Form.Control>
                        <Eye 
                            passwordVisible={passwordVisibleConfirm}
                            setPasswordVisible={setPassworVisibledConfirm} />
                    </div>
                    <Form.Text className='text-gray text-small'>
                        Mínimo 6 caracteres y solo debe contener números y letras.
                    </Form.Text>
                </Form.Group>
                <div className='col-12 mt-4'>
                    {
                        alertPassword ? 
                            <AlertMessage 
                                variant='danger' 
                                icon='error' 
                                text='Las contraseñas no coinciden' /> : null
                    }
                </div>
            </div> : null
            }

            <button type='submit' className='btn btn-sm px-4 py-2 float-end btn-primary rounded-pill mt-3' title='Actualizar perfil' disabled={preload || passwordsNoMatch}>
                { preload ? 'Por favor espere...' : 'ACTUALIZAR PERFIL' }
            </button>
        </Form>
    </>
  )
}

export default ProfileData;
