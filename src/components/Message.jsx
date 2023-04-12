import React from 'react'
import { Link } from 'react-router-dom';

const Message = ({ img, title, subtitle, textBtn = '', link }) => {
  return (
    <div className='text-center p-4 d-flex flex-column align-items-center justify-content-center'>
        <img src={img} alt={title} width={300} />
        <h2 className='mt-4'>{ title }</h2>
        <p className='mb-4' dangerouslySetInnerHTML={{ __html: subtitle }}></p>
        {
            textBtn !== '' ? 
            <Link to={link} className='btn btn-primary btn-lg rounded-pill px-4 py-1'>
                <small>{ textBtn }</small>
            </Link> : null
        }
    </div>
  )
}

export default Message;
