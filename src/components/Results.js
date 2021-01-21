import React, { useEffect } from 'react';
import Result from './Result';

function Results(props) {
  //rerender results when search results change
  useEffect(() => { }, [props.results])
  return (
    <section className='results-section'>
      <ul>
        {props.results.map((r, index) => <Result key={index} res={r} />)}
      </ul>
    </section>
  )
}

export default Results;
