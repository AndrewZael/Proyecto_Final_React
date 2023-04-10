import React, { useState, useContext, useEffect } from 'react';
import HeadProfile from '../components/HeadProfile';
import Form from 'react-bootstrap/Form';
import Context from '../contexts/Context';
import Countries from '../shared/Countries';
import Specialties from '../shared/Specialties';
import { getDatabase, ref, set, push, query, orderByChild, get } from "firebase/database";
import Preload from '../components/Preload';
import openToast from '../shared/OpenToast';

const ProfileNewPost = () => {
  const { 
    user,
    setUser,
    publications, 
    setPublications,
    setFilteredList,
    setInfoFeedBack
  } = useContext(Context);
  const [citeLength, setCiteLength] = useState(0);
  const [aboutYouLength, setAboutYouLength] = useState(0); 
  const [experienceLength, setExperienceLength] = useState(0);
  const [uploadingForm, setUploadingForm] = useState(false);

  const [publication, setPublication] = useState({});
  const [contact, setContact] = useState({});

  const db = getDatabase();

  useEffect(() => {
    const skills = document.getElementById("skills");
    let arrSkills = [];
    let lastSelectedOption = null;
    skills.addEventListener("mousedown", e => {
      const option = e.target;
      if (option.tagName === "OPTION") {
        e.preventDefault();
        if (option !== lastSelectedOption) {
          lastSelectedOption = option;
          option.selected = !option.selected;
        } else {
          lastSelectedOption = null;
        }
        
        arrSkills = [];
        Array.from(skills.selectedOptions).forEach(({ value, label }) => {
          arrSkills.push({ value, label });
        });
        const skillsValue = [...new Set(arrSkills.map(skill => JSON.stringify(skill)))].map(skill => JSON.parse(skill));
        publication.skills = skillsValue;
      }
    });
  }, [publication]);

  const submit = e => {

    setUploadingForm(true);
    e.preventDefault();
    const refPublication = ref(db, `publications/${user.user_id}`);
    const idRef = push(refPublication).key;

    publication.username = user.username;
    publication.user_id = user.user_id;
    publication.publication_id = idRef;
    publication.profile_picture = user.profile_picture;

    contact.user_id = user.user_id;
    contact.username = user.username;
    contact.profile_picture = user.profile_picture;
    contact.publication_id = idRef;

    setPublication(publication);
    setContact(contact);

    setPublications([publication, ...publications]);
    setFilteredList([publication, ...publications])

    if(!Array.isArray(user.publications)){
        user.publications = [];
    }
    user.publications = [publication, ...user.publications];
    setUser(user);

    // Filtros
    const filterCountriesRef = query(ref(db, 'filters/countries'), orderByChild('name'));
    const filterSkillsRef = query(ref(db, 'filters/skills'), orderByChild('name'));
    checkFilterExists(filterCountriesRef, 'filters/countries', publication.country);
    checkFilterExists(filterSkillsRef, 'filters/skills', publication.skills);

    Promise.all([
      set(ref(db, `users/${user.user_id}`), user),
      set(ref(db, `publications/${idRef}`), publication),
      set(ref(db, `contacts/${user.user_id}/${idRef}`), contact)
    ]).then(() => {
      setInfoFeedBack(openToast(
        'success',
        '¡Publicación creada con éxito!',
        'Tu publicación ha sido creada exitosamente.'
      ));
    }).catch(() => {
      setInfoFeedBack(openToast(
        'danger',
        '¡Ups! Lo sentimos',
        'No hemos podido agregar tu publicación, por favor inténtalo nuevamente.'
      ));
    }).finally(() => setUploadingForm(false));

  };

  const checkFilterExists = (reference, strRef, data) => {
    if(Array.isArray(data)){

      get(reference).then(snapshot => {
        data.forEach(newSkill => {
          let exists = false;
          snapshot.forEach(child=> {
            const skill = child.val();
            if(skill.value === newSkill.value) {
              exists = true;
            }
          });

          if(!exists){
            push(ref(db, strRef), {
              label: newSkill.label,
              value: newSkill.value
            });
          }
        });
      });

    }else{

      get(reference).then(snapshot => {
        let exists = false;
        snapshot.forEach(childSnapshot => {
          const child = childSnapshot.val();
          if(child.name.toLowerCase() === data.name){
              exists = true;
          }
        });
  
        if(!exists){
         push(ref(db, strRef), {
           label: data.label,
           name: data.name
         });
        }
     });

    }
  };

  return (
    <>
        <HeadProfile title='Nueva publicación' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' />
        <Form onSubmit={submit}>

            <Form.Group className='mb-4'>
                <Form.Label htmlFor='username' className='small mb-1 fw-bold text-dark'>Nombre de usuario</Form.Label>
                <Form.Control id='username' required placeholder={user.username} disabled className='py-2'></Form.Control>
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Label htmlFor='cite' className='small mb-1 fw-bold text-dark'>Descríbete en una frase</Form.Label>
                <textarea onKeyUp={e => publication.cite = e.target.value} 
                onChange={e => setCiteLength(e.target.value.length)} id='cite' placeholder='Lorem ipsum dolor sit amet' rows={1} maxLength={80} className='py-2 form-control' required></textarea>
                <Form.Text className='text-gray text-small'>Cantidad máxima de caracteres {citeLength} / 80</Form.Text>
            </Form.Group>

            <div className='row mb-4'>
              <Form.Group className='col-12 col-sm-6 mb-3 mb-md-0'>
                <Form.Label htmlFor='country' className='small mb-1 fw-bold text-dark'>País</Form.Label>
                <Form.Select onChange={e => publication.country = { label: e.target.options[e.target.selectedIndex].textContent, name: e.target.value }
                  } id='country' className='py-2' required>
                  <option value=''>Selecciona tu país</option>
                  {
                    Countries.map(country => (
                      <option key={country.name} value={country.name}>{country.label}</option>
                    ))
                  }
                </Form.Select>
              </Form.Group>

              <Form.Group className='col-12 col-sm-6'>
                <Form.Label htmlFor='specialty' className='small mb-1 fw-bold text-dark'>Especialidad</Form.Label>
                <Form.Select onChange={e => publication.specialty = { 
                  label: e.target.options[e.target.selectedIndex].textContent, name: e.target.value }} id='specialty' className='py-2' required>
                 <option value=''>Selecciona tu especialidad</option>
                 {
                  Specialties.map(specialty => (
                    <option key={specialty.name} value={specialty.name}>
                      { specialty.label }
                    </option>
                  ))
                 }
                </Form.Select>
              </Form.Group>
            </div>

            <Form.Group className='mb-4'>
              <Form.Label htmlFor='about-you' className='small mb-1 fw-bold text-dark'>En pocas palabras cuéntanos un poco de ti</Form.Label>
              <textarea onKeyUp={e => publication.about_you = e.target.value} onChange={e => setAboutYouLength(e.target.value.length)} id='about-you' className='form-control' maxLength={140} rows={4} required placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'></textarea>
              <Form.Text className='text-gray text-small'>Cantidad máxima de caracteres {aboutYouLength} / 140</Form.Text>
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label htmlFor='experience' className='small mb-1 fw-bold text-dark'>Cuéntanos sobre tus experiencias y habilidades</Form.Label>
              <textarea onKeyUp={e => publication.experience = e.target.value} onChange={e => setExperienceLength(e.target.value.length)} id='experience' className='form-control' required maxLength={300} rows={5} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in .'></textarea>
              <Form.Text className='text-gray text-small'>Cantidad máxima de caracteres {experienceLength} / 300</Form.Text>
            </Form.Group>

            <Form.Group className='w-100 mb-4'>
                <Form.Label htmlFor='skills' className='small mb-1 fw-bold text-dark'>Skills</Form.Label>
                <Form.Select id='skills' required multiple defaultValue={[]} className='py-2'>
                 {
                  Specialties.map(skill => (
                    <option key={skill.name} value={skill.name}>
                      { skill.label }
                    </option>
                  ))
                 }
                </Form.Select>
                <Form.Text className='text-gray text-small'>Puedes seleccionar todos los que necesites, según tu perfil</Form.Text>
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Label htmlFor='value' className='small mb-1 fw-bold text-dark'>Valor por tu servicio por hora</Form.Label>
                <Form.Control onKeyUp={e => publication.value = Number(e.target.value)} id='value' type='number' min={1} required placeholder='Ej: 10.5' className='py-2'></Form.Control>
                <Form.Text className='text-gray text-small'>Ingresa un valor en dólares (USD)</Form.Text>
            </Form.Group>

            <h2 className='mb-1 h5 fw-bold'>Datos de contacto</h2>
            <small className='mb-4 d-block'><span className='text-danger fw-bold'>*</span>Estos datos solo serán visibles para los usuarios que estén suscritos y puedan contactarte.</small>
            <div className='row mb-4'>
              <Form.Group className='col-12 col-sm-6 mb-3 mb-md-0'>
                <Form.Label htmlFor='whatsapp' className='small mb-1 fw-bold text-dark'>Whatsapp</Form.Label>
                <Form.Control onKeyUp={e => contact.whatsapp = e.target.value} id='whatsapp' type='number' required placeholder='Ej: +5691112233' className='py-2' />
                <Form.Text className='text-gray text-small'>Formato +569 99214 11 00</Form.Text>
              </Form.Group>

              <Form.Group className='col-12 col-sm-6'>
                <Form.Label htmlFor='email' className='small mb-1 fw-bold text-dark'>Email</Form.Label>
                <Form.Control onKeyUp={e => contact.email = e.target.value} id='email' type='email' required placeholder='mail@mail.com' className='py-2' />
              </Form.Group>
            </div>

            <Form.Group className='mb-4'>
                <Form.Label htmlFor='linkedin' className='small mb-1 fw-bold text-dark'>Linkedin</Form.Label>
                <Form.Control onKeyUp={e => contact.linkedin = e.target.value} id='linkedin' type='url' required placeholder='https://www.linkedin.com/in/tu-linkedin' className='py-2'></Form.Control>
            </Form.Group>

            <button title='Enviar formulario' className='btn btn-sm px-4 py-2 float-end btn-primary rounded-pill mt-4' disabled={uploadingForm}>
                { uploadingForm ? <Preload variant='light' size='sm' /> : 'ENVIAR' }
            </button>
        </Form>
    </>
  )
}

export default ProfileNewPost;
