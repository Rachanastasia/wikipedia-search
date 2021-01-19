import React from 'react';
import Result from './Result';

function Results(props) {
  /*This component renders the result
  that it recieves from props.results and maps into Result */
  return (
    <section className='results-section'>
      {props.results
        ? <ul>
          {props.results.map((r, index) => <Result key={index} res={r} />)}
        </ul>
        : <span className='no-results-text'>There are no results.</span>}
    </section>
  )
}

export default Results;
