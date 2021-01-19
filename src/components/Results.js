import React from 'react';
import Result from './Result';

function Results(props) {
  return (
    <section className='results-section'>
      {props.results.length
        ? <ul>
          {props.results.map((r, index) => <Result key={index} res={r} />)}
        </ul>
        : <p className='no-results-text'>There are no results.</p>}
    </section>
  )
}

export default Results;
