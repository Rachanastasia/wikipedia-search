import React, { useState } from 'react';
import './css/variables.css';
import './css/main.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';


function App() {
  const [results, setResults] = useState([]);

  return (
    <main className="App">
      <Header />
      <Search setResults={r => setResults(r)} />
      <Results results={results} />
    </main>
  );
}

export default App;
