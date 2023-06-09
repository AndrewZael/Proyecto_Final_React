import React, { useContext,useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Context from '../../contexts/Context';
import Preload from '../Preload';
import openToast from '../../shared/OpenToast';
import { getDatabase, get, ref, set } from 'firebase/database';
import userPlaceholder from '../../assets/img/user.png';

const ModalSubscription = () => {
  const { 
    showModalSub, 
    setShowModalSub,
    setShowModalContact,
    setInfoFeedBack,
    user,
    userLogin,
    modalRef
  } = useContext(Context);
  const [preload, setPreload] = useState(false);
  const [photo, setPhoto] = useState('');
  const handleClose = () => setShowModalSub(false);

  useEffect(() => {
    get(ref(getDatabase(), `contacts/${modalRef}`)).then(snapshot => {
       setPhoto(snapshot.val().profile_picture);
    }).catch(() => {
        setPhoto(userPlaceholder);
    });
    }, [modalRef]);

  useEffect(() => {
    
  }, []);

  const continuePay = () => {
    setPreload(true);
    setTimeout(() => {
        setPreload(false);
        set(ref(getDatabase(), `users/${user.user_id}/subscribed`), true).then(() => {
            setShowModalSub(false);
            setShowModalContact(true);
            setInfoFeedBack(openToast(
                'success',
                '¡Pago realizado con éxito!',
                'Tu pago ha sido confirmado, ya puedes disfrutar de CommUnity PRO'
            ));
        }).catch(() => {

        });
    },3000);
  }

  return (
    <Modal show={showModalSub} onHide={handleClose} centered backdrop='static'>
        {
            !preload ? 
            <Modal.Header className='d-flex align-items-start border-0 pb-0' closeButton>
                <header className='d-flex flex-column align-items-center w-100 pt-4'>
                    <b>Suscríbete a CommUnity PRO</b>
                    <span className='p-5 bg bg-secondary rounded-circle mb-2 mt-4'
                    style={{ backgroundImage: `url(${photo})` }}></span>
                    <p className='mb-0 text-center'>
                    Contactar con todos <br />nuestros profesionales.
                    </p>
                </header>
            </Modal.Header> : null
        }
        <Modal.Body>
            {
                !preload ? 
                <>
                <div className='d-flex justify-content-center mt-3 mb-4'>
                    <div className='d-flex flex-column justify-content-center text-center text-gray border border rounded-start py-2 px-3'>
                        <h3 className='fw-bold h5 mb-0'>1</h3>
                        <p className='mb-0'>mes</p>
                        <div>
                            <data value={7990} className='fw-bold'>$7.990 </data>
                            <small>CLP /mes</small>
                        </div>
                    </div>
                    <div className='text-center text-primary border border-primary py-2 px-3'>
                        <h3 className='fw-bold'>6</h3>
                        <p className='mb-0'>meses</p>
                        <data value={4990} className='fw-bold'>$4.990 </data>
                        <small>CLP /mes</small>
                    </div>
                    <div className='d-flex flex-column justify-content-center text-center text-gray border border rounded-end py-2 px-3'>
                        <h3 className='fw-bold h5 mb-0'>12</h3>
                        <p className='mb-0'>meses</p>
                        <div>
                            <data value={3990} className='fw-bold'>$3.990 </data>
                            <small>CLP /mes</small>
                        </div>
                    </div>
                </div>
                { userLogin ? 
                <button onClick={continuePay} className='btn btn-primary rounded-pill px-5 py-2 mx-auto d-block'>
                    CONTINUAR
                </button> : 
                <p className='text-center'>
                    Para continuar, por favor sigue los siguientes enlaces.
                </p>
                }
                { !userLogin ? 
                <nav className='mt-4'>
                    <ul className='list-unstyled d-flex justify-content-center gap-3'>
                        <li><Link to='/registro' onClick={() => setShowModalSub(false)}>Regístrate</Link></li>
                        <span className='text-gray'>|</span>
                        <li><Link to='/login' onClick={() => setShowModalSub(false)}>Ingresa</Link></li>
                    </ul>
                </nav> : null
                }
                </> : 
                <div className='py-5'>
                    <Preload 
                        flex={false} 
                        text='Por espera, estamos procesando tu pago'
                        center={true}  />
                </div>
            }
        </Modal.Body>
    </Modal>
  )
}

export default ModalSubscription;
