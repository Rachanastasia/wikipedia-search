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
      {results
        ? <Results results={results} />
        : <section>
          <p className='no-search-term'></p>
        </section>}
    </Fragment>
  )
}

export default WikipediaSearch;
