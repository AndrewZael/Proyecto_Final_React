import React, { useEffect, useState, useContext } from 'react';
import HeadPage from '../components/HeadPage';
import Value from '../components/Value';
import Skill from '../components/Skill';
import Facebook from '../components/icons-svg/Facebook';
import Linkedin from '../components/icons-svg/Linkedin';
import { useLocation, useParams } from 'react-router-dom';
import Context from '../contexts/Context';
import ContactButton from '../components/ContactButton';
import Fav from '../components/Fav';
import Share from '../components/Share';

const Detail = () => {
  const { publications, userLogin, user } = useContext(Context);
  const { id } = useParams();
  const [publication, setpublication] = useState({});
  const location = useLocation();
  const url = `${window.location.protocol}//${window.location.hostname}${location.pathname}`;
  
  useEffect(() => {
    const post = publications.find(p => p.publication_id === id);
    setpublication(post);
  },[id, publications]);

  return (
    <main>
      <HeadPage title={publication?.username} subtitle={publication?.cite} />
       <section title={publication?.username} className='col-12 col-sm-10 col-lg-9 col-xl-7 mx-auto min-vh-100 py-5 px-4'>
          <div className='row mb-4 pb-4 border-bottom'>
             <div className='col-12 col-md-4'>
                <div role='img' className='user-photo-detail w-100 rounded-circle bg mx-auto mb-4 border-soft border shadow-sm position-relative' style={{ backgroundImage: `url(${publication?.profile_picture})` }}>
                  { userLogin ?
                    <span className='position-absolute d-flex align-items-center justify-content-center bg-light rounded-circle border-soft border'>
                      <Fav 
                        id={publication?.publication_id}
                        fav={user.favorites?.some(f => f.publication_id === publication?.publication_id)}
                       />
                    </span> : null
                  }
                </div>
             </div>
             <div className='col-12 col-md-8'>
                <h2 className='fw-bold text-primary'>{ publication?.username }</h2>
                <span className='fw-bold text-primary'>{ publication?.country?.label }</span>
                <span className='fw-bold d-block mt-2'>{ publication?.specialty?.label }</span>
                <p>{ publication?.about_you }</p>
                <footer className='text-end pb-3'>
                   <Value val={publication?.value} sizeData={3.156} sizeCode={1.75} sizeHrs={1.3} />
                   <ContactButton obj={publication} className='px-4 py-2 mt-3' />
                </footer>
             </div>
          </div>
          <div className='pt-2'>
            <h3 className='fw-normal text-primary'>Más sobre { publication?.username }</h3>
            <div className='text-gray'>
              <p>{ publication?.experience }</p>
            </div>
          </div>
          <div className='pt-2'>
            <h3 className='fw-normal text-primary mb-3'>Skills</h3>
            {
              publication?.skills?.map(skill => (
                <Skill key={skill?.value} text={skill?.label} />
              ))
            }
          </div>
          <footer className='my-4 my-md-5 pt-4 border-top text-center'>
            <span className='text-gray d-block mb-2'>Compartir perfil en</span>
            <a href={`https://www.facebook.com/share.php?u=${url}`} target='_blank' rel='noopener noreferrer' className='link-icon d-inline-block' title='Compartir en facebook'>
              <Facebook color='#2A4FA1' size={32} />
            </a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} target='_blank' rel='noopener noreferrer' className='link-icon d-inline-block' title='Compartir en linkedin'>
              <Linkedin color='#2A4FA1' size={32} />
            </a>
            <Share id={publication.publication_id} />
          </footer>
       </section>
    </main>
  )
}

export default Detail;
