import React, { useState, useEffect } from 'react';
import { GrDown } from 'react-icons/gr';
import ResultDetails from './ResultDetails';
import { getWikipediaArticleDetails } from '../services/wikipedia-api-service';


function Result(props) {
  const [expanded, setExpanded] = useState(false);
  const [desc, setDesc] = useState('');
  const [views, setViews] = useState([]);

  const handleExpanded = async () => {
    if (!desc || !views) {
      const formatted = props.res.replace(/\s/g, '_');
      const { query } = await getWikipediaArticleDetails(formatted);
      const { description, pageviews } = Object.values(query.pages)[0];
      setDesc(description);
      setViews(pageviews);
    }
    setExpanded(!expanded);
  }

  return (
    <li className='search-result-wrapper' onClick={handleExpanded} tabIndex='0'>
      <div className='result-top-wrapper'>
        <p className='search-result-text'>{props.res}</p>
        <GrDown className={expanded ? 'search-result-less search-result-arrow' : 'search-result-arrow'} />
      </div>
      {expanded
        ? <ResultDetails desc={desc} views={views} />
        : null}
    </li>
  )
}

export default Result;
