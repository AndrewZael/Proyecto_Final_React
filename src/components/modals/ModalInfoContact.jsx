import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Whatsapp from '../icons-svg/Whatsapp';
import Linkedin from '../icons-svg/Linkedin';
import Context from '../../contexts/Context';
import Icon from '../Icon';
import { useContext } from 'react';

const ModalInfoContact = () => {

  const { showModalContact, setShowModalContact } = useContext(Context);
  const handleClose = () => setShowModalContact(false);

  return (
    <Modal show={showModalContact} onHide={handleClose} centered>
        <Modal.Header className='d-flex align-items-start border-0 pb-0' closeButton>
          <header className='d-flex flex-column align-items-center w-100 pt-4'>
            <span className='p-5 bg-secondary rounded-circle mb-2'></span>
            <p className='mb-0 text-center'>Estos son los datos para <br /> contactar a <b>Cecilia</b></p>
          </header>
        </Modal.Header>
        <Modal.Body>
            <ul className='list-unstyled col-12 col-sm-9 mx-auto pt-4 text-primary border-top'>
                <li className='d-flex flex-column flex-sm-row align-items-center mb-3'>
                    <Whatsapp color='#2a4fa1' size={32} /> 
                    <span className='ms-2 fw-bold'>+569 8 932 51 66</span>
                </li>
                <li className='d-flex flex-column flex-sm-row align-items-center mb-3'>
                    <Icon icon='mail' size={32} /> 
                    <span className='ms-2 fw-bold'>cecilia_ramirez@gmail.com</span>
                </li>
                <li className='d-flex flex-column flex-sm-row align-items-center mb-3'>
                    <Linkedin color='#2a4fa1' size={32} /> 
                    <a href='https://www.google.com/' target='_blank' rel="noopener noreferrer" className='ms-2 fw-bold'>https://www.linkedin.com/in/cecilia</a>
                </li>
            </ul>
        </Modal.Body>
    </Modal>
  )
}

export default ModalInfoContact;
