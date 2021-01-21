import React, { useEffect, useState } from 'react';
import { GrDown } from 'react-icons/gr';
import ResultDetails from './ResultDetails';
import { getWikipediaArticleDetails } from '../services/wikipedia-api-service';


function Result(props) {
  const [expanded, setExpanded] = useState(false);
  const [desc, setDesc] = useState('');
  const [views, setViews] = useState([]);

  useEffect(() => {
    //cleanup for new search
    return () => {
      setDesc('');
      setViews([]);
    }
    //rerender for new search
  }, [props.res])

  const handleExpanded = async () => {
    if (!desc || !views) {
      try {
        const formatted = props.res.replace(/\s/g, '_');
        //get details from API
        const { query } = await getWikipediaArticleDetails(formatted);
        const { description, pageviews } = Object.values(query.pages)[0];
        setDesc(description);
        setViews(pageviews);
      }
      catch (error) {
        console.error(error);
      }

    }
    setExpanded(!expanded);
  }

  return (
    <li className='search-result-wrapper'
      onClick={handleExpanded}
      onKeyPress={e => e.key === 'Enter' ? handleExpanded() : null} tabIndex='0'>
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
