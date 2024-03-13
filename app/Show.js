import React from 'react'
import WeatherDropdown from './Dropdown'
const Show = ({selectedCity, cities}) => {
    const currentCity = cities[selectedCity] || " "; 
    return (
      <div  className='max-w-md mx-auto shadow-md rounded-md mt-4 p-4 bg-gray-100 '>
        <h2 className='text-black bg-green-500 w-3/6 mx-auto p-2 rounded-lg shadow-lg font-bold text-center mb-5 shadow-indigo-500/50'>Weather Information</h2>
        <p className='bg-white px-4 py-2 rounded-md shadow-md mb-4 shadow-blue-500/50'>City: {currentCity[0]}</p>
        <p className='bg-white px-4 py-2 rounded-md shadow-md mb-4 shadow-blue-500/50'>Temperature: {currentCity[1]}</p>
        <p className='bg-white px-4 py-2 rounded-md shadow-md mb-4 shadow-blue-500/50'>Weather: {currentCity[2]}</p>
      </div>
    );
  } 

export default Show