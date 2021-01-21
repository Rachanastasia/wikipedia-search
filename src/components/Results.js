import React from 'react';
import Result from './Result';

function Results(props) {
  return (
    <section className='results-section'>
      <ul>
        {props.results.map((r, index) => <Result key={index} res={r} />)}
      </ul>
    </section>
  )
}

export default Results;
