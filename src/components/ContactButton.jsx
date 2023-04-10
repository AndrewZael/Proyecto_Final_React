import React, { useContext } from 'react';
import Context from '../contexts/Context';

const ContactButton = ({ obj, className = 'w-100' }) => {
    const { 
        setShowModalContact,
        setShowModalSub, 
        user,
        setModalRef } =  useContext(Context);
    const openModal = () => {
        setModalRef(`${obj.user_id}/${obj.publication_id}`);
        if(user.subscribed){
            setShowModalContact(true);
        }else{
            setShowModalSub(true);
        }
    };

  return (
    <button onClick={openModal} className={`btn btn-sm btn-primary rounded-pill ${className}`}>
        CONTACTAR
    </button>
  )
}

export default ContactButton;
