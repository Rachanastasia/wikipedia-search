import React from 'react';
import { searchWikipediaApi } from '../services/wikipedia-api-service';


function SearchBar(props) {

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await searchWikipediaApi(props.searchTerm);
      props.setResults(res[1])
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
            value={props.searchTerm} onChange={e => props.setSearchTerm(e.target.value)} />
        </fieldset>
        <button type='submit'>Search</button>
      </form>
    </section>
  )
}

export default SearchBar;
