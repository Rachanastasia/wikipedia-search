import React from 'react';
import { useFormatViews } from '../hooks/useFormatViews';

function ResultDetails(props) {

  const { weeklyViews, monthlyViews, dailyViews } = useFormatViews(props.views);

  return (
    <div className='result-details-wrapper'>
      {props.desc ? <p className='result-details-desc'>{props.desc}</p> : null}
      <p>Views today: {dailyViews ? dailyViews : 0}</p>
      <p>Views in the past 7 days: {weeklyViews ? weeklyViews : 0}</p>
      <p>Views in past 30 days: {monthlyViews ? monthlyViews : 0}</p>

    </div>
  )
}

export default ResultDetails;
