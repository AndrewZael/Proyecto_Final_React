import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDatabase, onValue, ref,  } from 'firebase/database';
import { useContext } from 'react';
import Context from '../contexts/Context';
import _ from 'lodash';

const Filter = () => {
  const [countries, setCountries] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedtSkills, setSelectedtSkills] = useState([]);

  const { setFilteredList, publications } = useContext(Context);

  const checkFilter = (val, checked, type) => {
    if(type === 'country'){
        !checked ? 
           selectedCountries.splice(selectedCountries.indexOf(val), 1)  :
        selectedCountries.push(val);
        setSelectedCountries(selectedCountries);
    }else{
        !checked ?
            selectedtSkills.splice(selectedtSkills.indexOf(val), 1) :
        selectedtSkills.push(val);
        setSelectedtSkills(selectedtSkills);
    }
    getFilter();
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

  return (
    <>
        <section title='Países'>
            <b>País</b>
            <ul className='list-unstyled mt-1'>
                {
                    countries.map((c, i) => (
                        <li key={c.name} className='mb-1'>
                            <input onChange={e => checkFilter(e.target.value, e.target.checked, 'country')} 
                            id={`pais-${i}`} type='checkbox' value={c.name} />
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
                            <input onChange={e => checkFilter(e.target.value, e.target.checked, 'skill')} 
                            id={`skill-${i}`} type='checkbox' value={s.value} />
                            <label htmlFor={`skill-${i}`} 
                            className='ms-2 text-dark small'>{ s.label }</label>
                        </li>
                    ))
                }
            </ul>
        </section>
    </>
  )
}

export default Filter;
