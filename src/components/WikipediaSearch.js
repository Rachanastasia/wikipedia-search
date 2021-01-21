import React, { useState, Fragment } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';

function WikipediaSearch() {
  const [searchTerm, setSearchTerm] = useState('JavaScript');
  const [results, setResults] = useState([]);

  return (
    <Fragment>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={t => setSearchTerm(t)}
        setResults={r => setResults(r)} />
      {results
        ? <Results results={results} />
        : null}
    </Fragment>
  )
}

export default WikipediaSearch;
