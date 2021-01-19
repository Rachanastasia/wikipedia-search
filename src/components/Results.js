import React from 'react';
import Result from './Result';

function Results(props) {
  /*This component renders the result
  that it recieves from props.results and maps into Result */

  //if results have image, display images on screen
  //display word cloud of 

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
