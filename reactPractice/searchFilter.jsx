// https://contactmentor.com/react-js-practice-exercises-solution/
// problem no.1

import React, { useState } from 'react';

export function App(props) {
  const list = ['banana', 'apple', 'carrot', 'orange', 'tomato'];
  const [filterList, setFilterList] = useState(list);
  const handleSearch = event => {
    if (event.target.value === '') {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      // if not found will return -1 (so if it === -1 then its not found)
      item =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };

  return (
    <div>
      <form className='search'>
        Search: <input type='text' id='searchBar' onChange={handleSearch} />
      </form>
      <ul>
        {filterList &&
          filterList.map((item, index) => (
            <li key={index}>{item}</li> //Display each item
          ))}
      </ul>
    </div>
  );
}