import React from 'react';
import './css/variables.css';
import './css/main.css';
import Header from './components/Header';
import WikipediaSearch from './components/WikipediaSearch';

function App() {
  return (
    <main className="App">
      <Header />
      <WikipediaSearch />
    </main>
  );
}

export default App;
