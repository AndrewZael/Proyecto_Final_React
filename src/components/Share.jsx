import React from 'react';
import Icon from './Icon';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Share = () => {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip>Compartir</Tooltip>}>
        <button title='Compartir' className='btn px-2 text-primary'>
            <Icon icon="share" />
        </button>
    </OverlayTrigger>
  )
}

export default Share;
