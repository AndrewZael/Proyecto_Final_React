import React from 'react';
import HeadPage from '../components/HeadPage';
import userExample from '../assets/img/user-example.jpg';
import Value from '../components/Value';
import Skill from '../components/Skill';
import facebook from '../assets/img/facebook.svg';
import linkedin from '../assets/img/linkedin.svg';

const Detail = () => {
  return (
    <main>
      <HeadPage title='Cecilia Ramirez' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt.' />
       <section title='Cecilia Ramirez' className='col-12 col-sm-10 col-lg-9 col-xl-7 mx-auto min-vh-100 py-5'>
          <div className='row mb-4 pb-4 border-bottom'>
             <div className='col-12 col-md-4'>
                <div role='img' className='h-100 rounded-circle bg' style={{ backgroundImage: `url(${userExample})` }}></div>
             </div>
             <div className='col-12 col-md-8'>
                <h2 className='fw-bold text-primary'>Cecilia Ramirez</h2>
                <span className='fw-bold text-primary'>Mexico</span>
                <span className='fw-bold d-block mt-2'>Community manager</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <footer className='text-end pb-3'>
                   <Value val={5.1} sizeData={3.156} sizeCode={1.75} sizeHrs={1.3} />
                   <button className='btn btn-primary btn-sm rounded-pill px-4 py-2 mt-3'>
                      CONTACTAR
                   </button>
                </footer>
             </div>
          </div>
          <div className='pt-2'>
            <h3 className='fw-normal text-primary'>Más sobre Cecilia</h3>
            <div className='text-gray'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className='pt-2'>
            <h3 className='fw-normal text-primary mb-3'>Skills</h3>
            <Skill text='SEO' />
            <Skill text='SEM' />
            <Skill text='Wordpress' />
            <Skill text='Redes sociales' />
            <Skill text='HTML' />
            <Skill text='Google ads' />
            <Skill text='Diseño' />
          </div>
          <footer className='my-5 pt-4 border-top text-center'>
            <span className='text-gray d-block mb-2'>Compartir perfil en</span>
            <a><img src={facebook} alt="Facebook" className='invert' /></a>
            <a><img src={linkedin} alt="Linkedin" className='invert' /></a>
          </footer>
       </section>
    </main>
  )
}

export default Detail;
