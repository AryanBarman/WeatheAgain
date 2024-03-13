'use client'
import React from 'react'
import {useState} from 'react'

const SearchPin = ({selectedCity,setSelectedCity,cities}) => {
    const [val,setVal]=useState('')
    const handleChange = (event) => {
        setVal(event.target.value);
        const zipCode = event.target.value;
        const matchingCity = Object.keys(cities).find(city => cities[city][3] === zipCode);
      
        if (matchingCity) {
          setSelectedCity(matchingCity);
        }
      };
     
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="zipcode">ZipCode</label>
          <input 
           type='text'
           id='zipcode'
           value={val}
           onChange={handleChange}
           className='bg-white px-4 py-2 rounded-md shadow-md mb-4 shadow-blue-500/50'
          />
        </form>
    </div>
  )
  }
export default SearchPin