import React, { useState } from 'react';
import { GrDown } from 'react-icons/gr'

function Result(props) {
  const [expanded, setExpanded] = useState(false);
  //fetch info with props.res as searchterm
  //replace space with underscore
  //run second query
  return (
    <li className='search-result-wrapper' onClick={() => setExpanded(!expanded)}>
      <p className='search-result-text'>{props.res}</p>
      <GrDown className={expanded ? 'search-result-less search-result-arrow' : 'search-result-arrow'} />
    </li>
  )
}

export default Result;
