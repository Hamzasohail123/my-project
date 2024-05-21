import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Card from './Card';
// import Login from './Login';

function Courses() {
  // State to hold the selected option for each dropdown
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: ''
  });

  // Function to handle selection for each dropdown
  const handleSelect = (option, dropdown) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [dropdown]: option
    }));
    console.log(`Selected option for ${dropdown}: ${option}`);
    // You can perform any other actions based on the selected option here
  };

  return (
    <div>
      <div>
        <p className='font-bold text-xl py-5 px-3'>What Would you like to learn</p>
      </div>

      <div className='bg-gray-200 px-5 py-8 flex gap-4'>
        <div>
          <Dropdown
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={(option) => handleSelect(option, 'dropdown1')}
            className='px-3'
          />
        </div>
        <div>
          <Dropdown
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={(option) => handleSelect(option, 'dropdown2')}
          />
        </div>
        <div>
          <Dropdown
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={(option) => handleSelect(option, 'dropdown3')}
          />
        </div>
        <div>
          <Dropdown
            options={['Option 1', 'Option 2', 'Option 3']}
            onSelect={(option) => handleSelect(option, 'dropdown4')}
          />
        </div>
      </div>

      <p className='px-5 py-3 font-bold text-'>Current Courses</p>
      <div className='grid grid-cols-1 px-4 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
}

export default Courses;
