import React from 'react';
import { useFormatViews } from '../hooks/useFormatViews';

function ResultDetails(props) {
  console.log(props.views)

  const { week, total } = useFormatViews(props.views)
  return (
    <div className='result-details-wrapper'>
      {props.desc ? <p>{props.desc}</p> : null}
      <p>Views in past 30 days: {total}</p>
    </div>
  )
}

export default ResultDetails;
