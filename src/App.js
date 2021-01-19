import React from 'react';
import './css/variables.css';
import './css/main.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';


function App() {
  return (
    <main className="App">
      <Header />
      <Search />
      <Results />
    </main>
  );
}

export default App;
