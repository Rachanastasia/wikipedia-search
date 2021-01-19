import React, { useState, Fragment } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';

function WikipediaSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  return (
    <Fragment>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={t => setSearchTerm(t)}
        setResults={r => setResults(r)} />
      {searchTerm
        ? <Results results={results} />
        : <section>
          <p className='no-search-term'>Enter a search term to view results!</p>
        </section>}
    </Fragment>
  )
}

export default WikipediaSearch;
