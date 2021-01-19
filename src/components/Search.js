import React, { useState } from 'react';
import { searchWikipediaApi } from '../services/wikipedia-api-service';


function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const t = await searchWikipediaApi(searchTerm);
      console.log('FROM HANDLE SUBMIT', t)
      props.setResults(t[1])
    }
    catch (error) {
      console.error(error);
    }

  }

  return (
    <section className='search-section'>
      <form className='search-wrapper' onSubmit={e => handleSubmit(e)}>
        <fieldset>
          <label htmlFor='search'>Search</label>
          <input type='text' name='search' id='search'
            value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </fieldset>
        <button type='submit'>Search</button>
      </form>
    </section>
  )
}

export default Search;
