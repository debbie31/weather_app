import React, { useContext } from 'react';
import Context from '../Context';

const WeatherSearch = () => {
  const { apiRequest } = useContext(Context);
  return (
    <div className='search'>
      <form onSubmit={apiRequest} className='search-form'>
        <input
          autoComplete='off'
          placeholder='Enter the City name'
          name='city'
          className='search-input'
          type='text'
        />
        <div className='search-submit'></div>
      </form>
    </div>
  );
};

export default WeatherSearch;
