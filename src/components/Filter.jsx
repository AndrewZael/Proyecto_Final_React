import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { getDatabase, onValue, ref,  } from 'firebase/database';
import Context from '../contexts/Context';
import _ from 'lodash';
import Icon from './Icon';

const Filter = ({ styles = '' }) => {
  const [btnClear, setBtnClear] = useState(false);
  const [countries, setCountries] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedtSkills, setSelectedtSkills] = useState([]);

  const { setFilteredList, publications } = useContext(Context);

  const clearFilter = () => {
    setBtnClear(false);
    setFilteredList([...publications]);
    setSelectedCountries([]);
    setSelectedtSkills([]);
    skills.forEach(s => {
        if(localStorage.getItem(s.value)){
            localStorage.setItem(s.value, false)
        }
    });
    countries.forEach(c => {
        if(localStorage.getItem(c.name)){
            localStorage.setItem(c.name, false)
        }
    });
  }

  const checkFilter = (target, check, type) => {
    if(type === 'country'){
        !check ? 
           selectedCountries.splice(selectedCountries.indexOf(target.value), 1)  :
        selectedCountries.push(target.value);
        setSelectedCountries(selectedCountries);
    }else{
        !check ?
            selectedtSkills.splice(selectedtSkills.indexOf(target.value), 1) :
        selectedtSkills.push(target.value);
        setSelectedtSkills(selectedtSkills);
    }
    getFilter();
    const { value, checked } = target;
    localStorage.setItem(value, checked);
    ckeckFilter();
  }

  const getFilter = () => {
    const listFiltered = publications.filter(item => {
        const p = selectedCountries.length ? _.intersection(selectedCountries, [item.country.name]).length : true;
        const s = selectedtSkills.length ? _.intersection(selectedtSkills, item.skills.map(s => s.value)).length : true;
        return p && s;
    });
    setFilteredList([...listFiltered]);
  }

  useEffect(() => {
    onValue(ref(getDatabase(), 'filters/countries'), snapshot => {
        const countries = [];
        snapshot.forEach(child => {
          countries.push(child.val());
        });
        setCountries([...countries]);
     });

     onValue(ref(getDatabase(), 'filters/skills'), snapshot => {
        const skills = [];
        snapshot.forEach(child => {
            skills.push(child.val());
        });
        setSkills([...skills]);
     });

  }, []);

  const ckeckFilter = () => {
    const skillsChecked = skills.some(s => localStorage.getItem(s.value) === 'true');
    const countriesChecked = countries.some(c => localStorage.getItem(c.name) === 'true');
    skillsChecked || countriesChecked ? setBtnClear(true) : setBtnClear(false);
    !skillsChecked && !countriesChecked && clearFilter();
  }

  useEffect(() => {
    ckeckFilter();
    // eslint-disable-next-line
  }, [countries, skills]);

  return (
    <div className={styles}>
        {
            btnClear ? 
            <header className='d-flex justify-content-end mb-3'>
                <button type='button' onClick={clearFilter} className='d-flex btn btn-outline-auxiliar'>
                    <Icon icon='filter_alt_off' />
                    <span className='ms-2 small'>Limpiar filtro</span>
                </button>
            </header> : null
        }
        <section title='Países'>
            <b>País</b>
            <ul className='list-unstyled mt-1'>
                {
                    countries.map((c, i) => (
                        <li key={c.name} className='mb-1'>
                            <input onChange={e => checkFilter(e.target, e.target.checked, 'country')} 
                            id={`pais-${i}`} type='checkbox' className='filter-check' value={c.name} 
                            checked={localStorage.getItem(c.name) === 'true'} />
                            <label htmlFor={`pais-${i}`} 
                            className='ms-2 text-dark small'>{ c.label }</label>
                        </li>
                    ))
                }
            </ul>
        </section>

        <section title='Tags'>
            <b>Skills</b>
            <ul className='list-unstyled mt-1'>
                {
                    skills.map((s, i) => (
                        <li key={s.value} className='mb-1'>
                            <input onChange={e => checkFilter(e.target, e.target.checked, 'skill')} 
                            id={`skill-${i}`} type='checkbox' className='filter-check' value={s.value} 
                            checked={localStorage.getItem(s.value) === 'true'} />
                            <label htmlFor={`skill-${i}`} 
                            className='ms-2 text-dark small'>{ s.label }</label>
                        </li>
                    ))
                }
            </ul>
        </section>
    </div>
  )
}

export default Filter;
