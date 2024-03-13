'use client'
import React from 'react';
import { useState } from 'react';
import Show from './Show';
import SearchPin from './SearchPin';
const WeatherDropdown = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const cities = {
    delhi: ["Delhi", "20 C", "Sunny","302021"],
    kolkata: ["Kolkata", "30 C", "Cloudy","302022"],
    chennai: ["Chennai", "25 C", "Haze","302023"],
    mumbai: ["Mumbai", "26 C", "Rainy","302024"],
    none:["no city was selected"],
  };
 
  return (
    <div className='bg-blue px-4 py-2 rounded-md shadow-md mb-4 shadow-blue-500/50'>
    <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
      <option value="">Select a City</option>
      <option value="delhi">Delhi</option>
      <option value="mumbai">Mumbai</option>
      <option value="chennai">Chennai</option>
      <option value="kolkata">Kolkata</option>
      <option value="none">None</option>
    </select>
    <Show selectedCity={selectedCity} cities={cities}/>
    <SearchPin selectedCity={selectedCity} setSelectedCity={setSelectedCity} cities={cities}/>
    </div>
  );
};

export default WeatherDropdown;
