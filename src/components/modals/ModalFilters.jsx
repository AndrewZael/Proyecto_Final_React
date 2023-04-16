import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Context from '../../contexts/Context';
import Filter from '../Filter';

const ModalFilters = () => {
  const { 
    showModalFilters, 
    setShowModalFilters
  } = useContext(Context);
  const handleClose = () => setShowModalFilters(false);

  return (
    <Modal show={showModalFilters} onHide={handleClose} fullscreen={true}  backdrop='static'>
        <Modal.Header className='pb-1' closeButton>
            <h2 className='h4'>Filtrar</h2>
        </Modal.Header>
        <Modal.Body>
            <Filter />
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
            <button onClick={() => setShowModalFilters(false)} className='btn rounded-pill btn-primary px-4'>
                <span className='small'>APLICAR</span>
            </button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModalFilters;
