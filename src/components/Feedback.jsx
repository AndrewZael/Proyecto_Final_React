import React, { useContext } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Context from '../contexts/Context';

const Feedback = () => {
  const { infoFeedBack, setInfoFeedBack } = useContext(Context);
  const close = () => {
    infoFeedBack.show = false;
    setInfoFeedBack({...infoFeedBack});
  }

  return (
    <ToastContainer className="position-fixed z-1 p-3" position='bottom-center'>
        <Toast show={infoFeedBack.show} bg={infoFeedBack?.bg} animation={true} onClose={close} 
        delay={5000} autohide>
            <Toast.Header closeButton={true}>
                <strong className="me-auto">{ infoFeedBack.title }</strong>
            </Toast.Header>
            <Toast.Body  className='text-light'>{ infoFeedBack.message }</Toast.Body>
        </Toast>
     </ToastContainer>
  )
}

export default Feedback
