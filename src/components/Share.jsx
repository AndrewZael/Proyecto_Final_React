import React, { useContext } from 'react';
import Icon from './Icon';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Context from '../contexts/Context';

const Share = ({ id }) => {
  const { publications } = useContext(Context);
  const sharePost = async () => {
    const post = publications.find(p => p.publication_id === id);
    const data = {
      tittle: post.username,
      text: post.about_you,
      url: `${window.location.origin}/detalle/${post.publication_id}`
    }

    try{
      await navigator.share(data);
    } catch(err){

    }

  };

  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip>Compartir</Tooltip>}>
        <button onClick={sharePost} title='Compartir' className='btn px-2 text-primary'>
            <Icon icon="share" />
        </button>
    </OverlayTrigger>
  )
}

export default Share;
